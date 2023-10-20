from rest_framework.response import Response
from .serializers import ProductSerializer
from rest_framework.views import APIView
from .data import *
import json

# Create your views here.
additemsincart = []

class ProductView(APIView):
    def get(self , request):
        serializer = ProductSerializer(all_products, many=True).data
        return Response(serializer)
    
class CartView(APIView):
    def post(self , request , id):
        print(type(request.body))
        data = json.loads(request.body)
        return Response(("message" : "works"))
       
    

               