from django.db import models

# Create your models here.
class Item(models.Model):
    Name = models.CharField(max_length=200)
    Image = models.URLField()
    Category = models.CharField(max_length=100)
    Description = models.TextField()
    Restaurant_Name = models.CharField(max_length=200)
    Price = models.IntegerField()
    Quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.Name