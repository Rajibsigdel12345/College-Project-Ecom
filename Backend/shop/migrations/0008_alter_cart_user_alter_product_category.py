# Generated by Django 5.0.4 on 2024-05-16 07:03

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0007_order_order_time_alter_order_is_ordered_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[(' ', ' '), ('shirt', 'shirt'), ('foot_wear', 'Foot Wear'), ('pants', 'Pants'), ('wearables', 'Wearables'), ('fruits', 'Fruits')], default=' ', max_length=100),
        ),
    ]
