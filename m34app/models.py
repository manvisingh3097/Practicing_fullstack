from django.db import models

# Create your models here.

class cartitems(models.Model):
    itemname: models.CharField(max_length=100)
    item_id : models.IntegerField()
    item_price : models.FloatField()
    
