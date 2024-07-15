from django.urls import path, include
from rest_framework import routers
from .views import CheckOutView, OrderApiView, ProductViewSet, LoginView, SignUpView, CartViewSet,VerifyTokenView

router = routers.DefaultRouter()
router.register(r"products", ProductViewSet, basename="product")
# router.register(r'cart', CartViewSet,basename='cart')

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("signup/", SignUpView.as_view(), name="signup"),
    path("shop/", include(router.urls)),
    path('checkout/',CheckOutView.as_view(), name='checkout'),
    path('order/',OrderApiView.as_view(), name='order'),
    path('order/<int:pk>',OrderApiView.as_view(), name='order-detail'),
    path('verify/', VerifyTokenView.as_view(), name='verify'),
    path('shop/cart/', CartViewSet.as_view(), name='cart'),
    path('shop/cart/<int:pk>', CartViewSet.as_view(), name='cart'),
]
