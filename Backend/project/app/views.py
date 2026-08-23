from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class FoodShowViewSet(ModelViewSet):
    queryset = FoodShow.objects.all()
    serializer_class = FoodShowSerializer


class ChefViewSet(ModelViewSet):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer

class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer



class ReservationViewSet(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    def perform_create(self, serializer):
        reservation = serializer.save()

       
        send_mail(
            subject=f"New Reservation Request - {reservation.Name}",
            message=(
                f"New table reservation received:\n\n"
                f"Name: {reservation.Name}\n"
                f"Phone: {reservation.Phone}\n"
                f"Email: {reservation.Email}\n"
                f"Guests: {reservation.Guests}\n"
                f"Date: {reservation.Date}\n"
                f"Time: {reservation.Time}\n"
                f"Special Requests: {reservation.SpecialRequests or 'None'}\n"
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=False,
        )

       
        send_mail(
            subject="We've Received Your Reservation Request - Swadeshi Rasoi",
            message=(
                f"Hi {reservation.Name},\n\n"
                f"Thank you for choosing us! We've received your reservation request for "
                f"{reservation.Guests} on {reservation.Date} at {reservation.Time}.\n\n"
                f"Our team will confirm your table shortly via email with your table number.\n\n"
                f"Regards,\nSwadeshi Rasoi Team"
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[reservation.Email],
            fail_silently=False,
        )