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

class FoodShow(models.Model):
    Name = models.CharField(max_length=200)
    Image = models.URLField()
    Description = models.TextField()

    def __str__(self):
        return self.Name

class Chef(models.Model):
    Name = models.CharField(max_length=200)
    Image = models.URLField()
    Role = models.CharField(max_length=100)
    Experience = models.CharField(max_length=50)
    Instagram = models.URLField(null=True, blank=True)
    Facebook = models.URLField(null=True, blank=True)
    Twitter = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.Name



class Review(models.Model):
    Name = models.CharField(max_length=200)
    Image = models.URLField()
    Role = models.CharField(max_length=100)
    Rating = models.IntegerField(default=5)
    Description = models.TextField()

    def __str__(self):
        return self.Name

class Reservation(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
        ("Cancelled", "Cancelled"),
    ]

    Name = models.CharField(max_length=200)
    Phone = models.CharField(max_length=20)
    Email = models.EmailField()
    Guests = models.CharField(max_length=50)
    Date = models.DateField()
    Time = models.CharField(max_length=20)
    SpecialRequests = models.TextField(null=True, blank=True)
    Status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Pending")
    TableNumber = models.CharField(max_length=20, null=True, blank=True)
    CreatedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.Name} - {self.Date} {self.Time}"