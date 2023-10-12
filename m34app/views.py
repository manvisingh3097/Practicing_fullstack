from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .data import manvidetails
from .serializers import manvidetailsserilizer

# Create your views here.

class manvidata(view):
    def get(self , request):
        serialiseddataa