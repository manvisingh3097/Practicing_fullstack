from django.shortcuts import render
from django.views import View
from django.http import JsonResponse , Http404
from .data import cartitems
from .serializers import cartitemserializers
import json

# Create your views here.
additemsincart = []

class cartdata(View):
    def get(self , request):
        serialiseddata = cartitemserializers(cartitems, many=True).data
        return JsonResponse(serialiseddata, safe=False)
    
class cartdetail(View):
    def get(self , request , items_id):
        new = json.loads(request.body)
        itemfound = None
        for item in cartitems:
            if item["items_id"]==items_id: 
                itemfound = item
                break 
            if itemfound:
                return JsonResponse(cartitemserializers(itemfound).data, safe=False)
            else:
                raise Http404("Book not Found")
            

    def post(self , request , items_id) :
        add_items = json.loads(request.body)
        add_items["item_id"]= items_id

    additemserializer = cartitemserializers(data=add)

               