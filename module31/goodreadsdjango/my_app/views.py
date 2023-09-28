from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .data import Product
from .serializers import BookSerializer

# Create your views here.

class BookList(View):
    def get(self, request):
        serialized_books= BookSerializer(Product, many=True).data
        return JsonResponse(Product, safe=False)  

  