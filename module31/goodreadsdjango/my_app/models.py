from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=100)
    Description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.URLField()
    category = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=6, decimal_places=2)

class Rating(models.Model):
   
    count = models.IntegerField()
    rate = models.DecimalField(max_digits=6, decimal_places=2)


class Order(models.Model):
    
    List_of_products = models.CharField(max_length=100)
    Created_at = models.DateField()
    Updated_at = models.DateField()
    status = models.CharField(max_length=100)
    subtotal = models.IntegerField()

