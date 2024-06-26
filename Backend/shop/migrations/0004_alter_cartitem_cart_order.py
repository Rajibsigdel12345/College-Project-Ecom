# Generated by Django 5.0.4 on 2024-05-13 09:59

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_cartitem_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cart_item', to='shop.cart'),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_price', models.FloatField()),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('is_ordered', models.BooleanField(default=False)),
                ('order_id', models.CharField(max_length=100, unique=True)),
                ('cart', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_cart', to='shop.cart')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
