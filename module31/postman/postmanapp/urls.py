import django.urls import path
from . import views

urlpatterns =[
    path('/books' , views.sampleproduct.as_view(), name='book-list' )

]
