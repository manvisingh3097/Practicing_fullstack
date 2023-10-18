from django.urls import path
from .views import cartdata , cartdetail

urlpatterns=[
    path('details/' , cartdata.as_view(), name='cart-data' ),
    path('details/<int:items_id>/' , cartdetail.as_view(), name='cart-detail' )

]