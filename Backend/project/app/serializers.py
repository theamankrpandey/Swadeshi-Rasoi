from rest_framework import serializers
from .models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class FoodShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodShow
        fields = '__all__'


class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chef
        fields = '__all__'