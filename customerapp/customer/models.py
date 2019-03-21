from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=100, blank=True, default='')
    email =  models.CharField(max_length=100, blank=True, default='')
    phone = models.CharField(max_length=100, blank=True, default='')
    state = models.CharField(max_length=100, blank=True, default='')
    address = models.CharField(max_length=100, blank=True, default='')