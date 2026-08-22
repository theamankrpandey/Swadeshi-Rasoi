from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *
# Create your views here.
class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class FoodShowViewSet(ModelViewSet):
    queryset = FoodShow.objects.all()
    serializer_class = FoodShowSerializer