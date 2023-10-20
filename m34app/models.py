from django.db import models

# Create your models here.


class Product (models.Model):

    product_id = models.IntegerField()
    name = models. CharField (max_length=200)
    slug_name = models.SlugField (max_length=200)
    image = models. URLField()
    brand = models. CharField (max_length=200)
    shipping = models. CharField (max_length=200)
    description = models.TextField()
    price = models.DecimalField (max_digits=10, decimal_places=2)
    category_id = models. IntegerField()
    featured = models. BooleanField (default=False)
    active = models. BooleanField (default=True)


class Cart(models.Model):
    cart_id=models.IntegerField()
    Product_id=models.IntegerField()
    quantity=models.IntegerField()
    total = models.DecimalField(max_digits=10 , decimal_places=2)
        
