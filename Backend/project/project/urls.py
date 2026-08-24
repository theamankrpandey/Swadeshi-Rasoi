"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.views import *


router = DefaultRouter()
router.register(r"items", ItemViewSet, basename="items")
router.register(r"foodshow", FoodShowViewSet, basename="foodshow")
router.register(r"chefs", ChefViewSet, basename="chefs")
router.register(r"reviews", ReviewViewSet, basename="reviews")
router.register(r"Reservation", ReservationViewSet, basename="Reservation")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    # path('reservations/', reservation, name="reservation")
    
]
