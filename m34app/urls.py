from django.urls import path
from .views import *

urlpatterns=[
    path('products/' , ProductView.as_view(), name='all-products'),
    path('products/<int:id>/' , ProductView.as_view(), name='specific-product'),
    path('additem/<int:id>/' , CartView.as_view(), name='cart-add'),

]