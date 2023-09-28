from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .data import Product
from .serializer import bookserializer

# Create your views here.

class sampleproduct(View):
    def get(self, request):
        serialized_books= bookserializer(Product, many=True).data
        return JsonResponse(sampleproduct, safe=False)  

  