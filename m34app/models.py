from django.db import models

# Create your models here.

class manvidetails(models.Model):
    name: models.CharField(max_length=100)
    age : models.IntegerField()
    email : models.EmailField()
    gender : models.CharField(max_length=100)
    city : models.CharField(max_length=100)
