from django.urls import path;
from . import views

urlpatterns =[
    path('/details' , views.manvidata.as_view(), name='details-list' )

]