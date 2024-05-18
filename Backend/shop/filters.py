import django_filters
from . import models

class ProductFilterSet(django_filters.FilterSet):
    category = django_filters.ChoiceFilter(
      field_name='category',
      label='Category',
      lookup_expr='iexact',
      choices=models.ProductCategoryChoices.choices
      )
    price = django_filters.NumberFilter(
      field_name='price',
      label='Price',
      lookup_expr='lte')
    name = django_filters.CharFilter(
      field_name='name',
      label='Name',
      lookup_expr='icontains'
      )
    class Meta:
        model = models.Product
        fields = ['category', 'price', 'name']

class OrderFilterSet(django_filters.FilterSet):
    order_date = django_filters.DateFilter(
      field_name='order_date',
      lookup_expr='exact'
      )
    class Meta:
        model = models.Order
        fields = ['order_date']