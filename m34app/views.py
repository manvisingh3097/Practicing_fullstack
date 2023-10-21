from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView
from .data import *
import json
from rest_framework import status

# Create your views here.
additemsincart = []

class ProductView(APIView):
    def get(self , request):
        serializer = ProductSerializer(all_products, many=True).data
        return Response(serializer)
    
class CartView(APIView):

    def get(self,request): 
        serializers = CartSerializer(cart_items, many = True).data
        return Response(serializers)

    def post(self , request , id):
        data = json.loads(request.body)
        data["product_id"] = id
        data["cart_id"] = len(cart_items) + 1
        serializer = CartSerializer(data=data)
        if serializer.is_valid():
            cart_items.append(serializer.data)
            return Response({"message" : "item added to cart"}, status=200)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self , request , id):
        for val in cart_items:
            if val['cart_id'] == id:
                cart_items.remove(val)
                return Response({"message" : "item has been removed"}, status=200)
        return Response({"message": "item not found"},status=404)
    
class ProductSearch(APIView):
    def get(self , request):
        query = request.GET.get("query", None)
        Product = []
        for val in all_products:
            if val["name"]==query:
                Product.append(val)
        serializers = ProductSerializer(Product,many=True).data
        return  Response(serializers)
       
    

               