from pyexpat import model
from rest_framework.serializers import ModelSerializer, ListSerializer
from rest_framework_simplejwt.serializers import PasswordField
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import MethodNotAllowed
from .models import CartItem, User, Product, Cart,Order


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(trim_whitespace=True, allow_blank=True, required=False)
    email = serializers.EmailField(trim_whitespace=True, allow_blank=True,required=False)
    password = PasswordField()

    def validate(self, attrs):
        if not attrs.get("username") and not attrs.get("email"):
            raise serializers.ValidationError("Username or email is required")
        return attrs


class SignUpSerializer(serializers.ModelSerializer):
    password = PasswordField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name',]

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

        extra_kwargs = {
            "id": {"read_only": True},
        }

# class ProductListSerializer(ListSerializer):
#     child = ProductSerializer()

#     # def create(self, validated_data):
#     #     products = [Product(**item) for item in validated_data]
#     #     return Product.objects.bulk_create(products)

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), write_only=True)

    class Meta:
        model = CartItem
        fields = "__all__" 
        
        extra_kwargs = {
            "id": {"read_only": True},
            "cart": {"write_only": True},
        }


class CartSerializer(ModelSerializer):
    cart_item = CartItemSerializer(many=True, read_only=True)
    cart = CartItemSerializer(many=True, write_only=True)
    class Meta:
        model = Cart
        fields = "__all__"
        extra_kwargs = {
            "id": {"read_only": True},
            "user": {"read_only": True},
        }
    def create(self, validated_data):
        raise MethodNotAllowed(method='POST')
    def update(self, instance, validated_data):
        cart_items = validated_data.pop("cart")
        for item in cart_items:
            self._update_or_create_cart_item(instance, item)
        return instance

    def _update_or_create_cart_item(self, cart, item):
        product = item.pop("product_id")
        product_quantity = product.quantity
        input_cart_quantity = item.get("quantity", 0)

        if input_cart_quantity <= 0:
            return

        if input_cart_quantity > product_quantity:
            raise serializers.ValidationError({"message":"Quantity not available"})

        cart_item = CartItem.objects.filter(cart=cart, product=product).first()
        if cart_item:
            self._update_cart_item(cart_item, input_cart_quantity, item.get("add_to_cart", True))
        elif item.get("add_to_cart", True):
            CartItem.objects.create(cart=cart, product=product, **item)

    def _update_cart_item(self, cart_item, cart_quantity, add_to_cart):
        if add_to_cart and( cart_item.quantity + cart_quantity) > cart_item.product.quantity:
            raise serializers.ValidationError({"message":"Quantity not available"})

        cart_item.quantity = cart_quantity + cart_item.quantity if add_to_cart else cart_item.quantity - cart_quantity
        if cart_item.quantity <= 0:
            cart_item.delete()
        else:
            cart_item.save()


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # Add more custom claims here

        return token

class OrderDetailSerializer(ModelSerializer):
    product = ProductSerializer(read_only=True, many=True)
    class Meta:
        model = Order
        fields = "__all__"

        extra_kwargs = {
            "id": {"read_only": True},
            "user": {"read_only": True},
        }
class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = ['id','order_id','total_price','order_date','is_ordered']