from rest_framework import serializer;
from .models import sample_products_json;

class bookserializer(serializer.Modelserializer):
    class meta:
        model:sample_products_json
        fields='__all__'

