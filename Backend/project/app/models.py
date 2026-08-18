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
    OldPrice = models.IntegerField(null=True, blank=True)
    Rating = models.IntegerField(default=0)
    Tag = models.CharField(max_length=50, null=True, blank=True)
    TagType = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.Name