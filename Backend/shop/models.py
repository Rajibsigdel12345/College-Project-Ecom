from django.contrib.auth.models import AbstractBaseUser,BaseUserManager, User
from django.db import models

# Create your models here.


class ProductCategoryChoices(models.TextChoices):
    DEFAULT = " ", " "
    SHIRT = 'shirt', "shirt"
    FOOT_WEAR = 'foot_wear', "Foot Wear"
    PANTS = 'pants', "Pants",
    WEARABLES = 'wearables', "Wearables",
    FRUITS = 'fruits', "Fruits",

class UserManager(BaseUserManager):
    def create_user(self, username, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, first_name, last_name, password):
        user = self.create_user(
            username,
            email,
            first_name,
            last_name,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)
    is_seller = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']
    
    def has_module_perms(self, app_label):
        return self.is_superuser
    def has_perm(self, perm, obj=None):
        return self.is_superuser
    
    


class Product(models.Model):
    product_id = models.CharField(unique=True, blank=False, max_length=100)
    batch_id = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    category = models.CharField(
        choices=ProductCategoryChoices.choices, default=ProductCategoryChoices.DEFAULT, max_length=100)
    price = models.FloatField()
    image_url = models.URLField()
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.name}'


class Cart(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, null=False,related_name="user")
    def __str__(self):
        return f"{self.user.username}"

class CartItem(models.Model):
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE, null=False,related_name="product_ref")
    cart = models.ForeignKey(to=Cart, on_delete=models.CASCADE, null=True,related_name="cart_item")
    quantity = models.PositiveIntegerField(default=1)
    add_to_cart = models.BooleanField(default=True)
    # order_placed = models.BooleanField(default=False)
    def __str__(self):
        if len(self.product.name)>2:
            return f"{self.product.name} x {self.quantity}"
        return f"{self.product.product_id} x {self.quantity}"

class Order(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=False)
    product = models.ManyToManyField(to=Product,related_name="product_order")
    total_price = models.FloatField(default=0.0)
    order_date = models.DateField(auto_now_add=True)
    order_time = models.TimeField(auto_now_add=True)
    is_ordered = models.BooleanField(default=True)
    order_id = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f"{self.user.username} x {self.total_price}"