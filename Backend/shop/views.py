from rest_framework_simplejwt.backends import TokenBackend
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from django_filters.rest_framework import DjangoFilterBackend
from .filters import OrderFilterSet, ProductFilterSet
from django.db import transaction
import uuid
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import CartItem, Order, Product, User, Cart
from decouple import config
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsAdmin
from .serializers import ProductSerializer, LoginSerializer, SignUpSerializer, CartSerializer, OrderSerializer, CustomTokenObtainPairSerializer, OrderDetailSerializer


class CustomTransactionPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "count"
    max_page_size = 100


class ProductViewSet(ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilterSet
    pagination_class = CustomTransactionPagination

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return super().get_permissions()

    def create(self, request, *args, **kwargs):
        if isinstance(request.data, list):  # A list of products is being created
            serializer = self.serializer_class(data=request.data, many=True)
        else:  # A single product is being created
            serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_query = request.query_params.get("search")
        if search_query:
            search_query = search_query.rstrip('/')
            keywords = search_query.split()
            q_objects = Q()
            for keyword in keywords:
                q_objects |= (
                    Q(name__icontains=keyword)
                    | Q(product_id__icontains=keyword)
                    | Q(category__icontains=keyword)
                )
            queryset = queryset.filter(q_objects)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CartViewSet(APIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get_object_item(self, pk):
        return get_object_or_404(CartItem, pk=pk)

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)

    def get(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None, **kwargs):
        instance = self.get_queryset().get(user=request.user)
        serializer = self.serializer_class(instance, data=request.data)
        if serializer.is_valid(raise_exception=True):
            cart_item = serializer.validated_data.get("cart")
            for item in cart_item:
                product = item.get("product_id")
                product_quantity = product.quantity
                cart_quantity = serializer.validated_data.get("quantity", 1)
                if cart_quantity > product_quantity:
                    return Response("Quantity not available", status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, **kwargs):
        instance = self.get_object_item(pk)
        instance.delete()
        return Response({"message": "Item removed from cart"}, status=status.HTTP_200_OK)


class VerifyTokenView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        auth_header = request.headers.get("Authorization")
        token = auth_header.split(" ")[1]
        if not token:
            return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            backend = TokenBackend(
                algorithm='HS256', signing_key=config('SECRET_KEY'))
            data = backend.decode(token=token, verify=True)
            return Response({"message": "Token is valid", **data}, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": "Token is invalid"}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            username = serializer.validated_data.get("username")
            password = serializer.validated_data.get("password")
            email = serializer.validated_data.get("email")
            if email and username:
                user = User.objects.filter(
                    email=email, username=username).first()
            elif username:
                user = User.objects.filter(username=username).first()
            else:
                user = User.objects.filter(email=email).first()
            if user is None:
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            if not user.check_password(password):
                return Response("Invalid password", status=status.HTTP_400_BAD_REQUEST)
            token = CustomTokenObtainPairSerializer.get_token(user)
            return Response(data={
                "message": "Login successful",
                "refresh": str(token),
                "access": str(token.access_token)}, status=status.HTTP_200_OK)


class SignUpView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    serializer_class = SignUpSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = CustomTokenObtainPairSerializer.get_token(user)
            return Response(data={
                "message": "User created successfully",
                "refresh": str(token),
                "access": str(token.access_token)}, status=status.HTTP_201_CREATED)
        return Response("An error occurred", status=status.HTTP_400_BAD_REQUEST)


class CheckOutView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart = Cart.objects.filter(user=request.user).first()
        if not cart.cart_item.all():
            return Response({"detail": "Cart is empty"}, status=status.HTTP_400_BAD_REQUEST)
        with transaction.atomic():
            order_id = uuid.uuid1()
            order, _ = Order.objects.get_or_create(
                user=request.user, order_id=order_id
            )
            total_price = 0
            for item in cart.cart_item.all():
                product = item.product
                cart_quantity = item.quantity
                quantity = product.quantity
                if product is None:
                    return Response("Product not found", status=status.HTTP_404_NOT_FOUND)
                if quantity == 0:
                    return Response("Product out of stock", status=status.HTTP_400_BAD_REQUEST)
                if quantity < cart_quantity:
                    return Response("Quantity not available", status=status.HTTP_400_BAD_REQUEST)
                product.quantity -= cart_quantity
                product.save()
                cart.cart_item.remove(item)
                total_price += cart_quantity*product.price
                order.product.add(product)
            order.total_price = total_price
            order.save()
        return Response({"message": "Order placed successfully"}, status=status.HTTP_200_OK)


class OrderApiView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = [OrderFilterSet]

    def get(self, request, *args, **kwargs):
        if kwargs.get('pk'):
            order = get_object_or_404(
                Order, user=request.user, id=kwargs['pk'])
            serializer = OrderDetailSerializer(order)
            return Response(serializer.data, status=status.HTTP_200_OK)
        orders = Order.objects.filter(user=request.user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        order = get_object_or_404(Order, user=request.user, id=kwargs['pk'])
        if not order.is_ordered:
            return Response({"message": "Order already cancelled"}, status=status.HTTP_400_BAD_REQUEST)
        order.is_ordered = False
        order.save()
        return Response({"message": "Order cancelled"}, status=status.HTTP_200_OK)
