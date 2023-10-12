from rest_framework import serializers;
from .models import manvidetails;

class manvidetailsserilizer(serializers.ModelSerializer):
    class Meta:
        model: manvidetails
        fields = "__all__"