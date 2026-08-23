from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ("Name", "Phone", "Email", "Guests", "Date", "Time", "Status", "TableNumber", "CreatedAt")
    list_filter = ("Status", "Date")
    search_fields = ("Name", "Email", "Phone")