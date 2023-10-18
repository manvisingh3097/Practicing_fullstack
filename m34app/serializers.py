from rest_framework import serializers;
from .models import cartitems;

class cartitemserializers(serializers.ModelSerializer):
    class Meta:
        model: cartitems
        fields = ("__all__")
