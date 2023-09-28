from django.db import models

# Create your models here.


class sample_products_json (models.Model):
    title = models.CharField(max_length=100)
    Description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.URLField()
    category = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=6, decimal_places=2)