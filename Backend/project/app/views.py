from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
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
    def perform_create(self, xyz):
        data = xyz.save()
        send_mail(
            subject=f"New Reservation Request - {data.Name}",
            message=(
                f"New table reservation received:\n\n"
                f"Name: {data.Name}\n"
                f"Phone: {data.Phone}\n"
                f"Email: {data.Email}\n"
                f"Guests: {data.Guests}\n"
                f"Date: {data.Date}\n"
                f"Time: {data.Time}\n"
                f"Special Requests: {data.SpecialRequests or 'None'}\n"
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=False,
        )

       
        send_mail(
            subject="We've Received Your Reservation Request - Swadeshi Rasoi",
            message=(
                f"Hi {data.Name},\n\n"
                f"Thank you for choosing us! We've received your reservation request for "
                f"{data.Guests} on {data.Date} at {data.Time}.\n\n"
                f"Our team will confirm your table shortly via email with your table number.\n\n"
                f"Regards,\nSwadeshi Rasoi Team"
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[data.Email],
            fail_silently=False,
        )





# Raw Code Of Reservation 
# @csrf_exempt
# def reservation(req):
#     if req.method == "POST":
#         data = json.loads(req.body)
#         n = data.get("Name")
#         p = data.get("Phone")
#         e = data.get("Email")
#         g = data.get("Guests")
#         d = data.get("Date")
#         t = data.get("Time")
#         sr = data.get("SpecialRequests")
#         reservation = Reservation.objects.create(
#             Name=n,
#             Phone=p,
#             Email=e,
#             Guests=g,
#             Date=d,
#             Time=t,
#             SpecialRequests=sr,
#         )

#         send_mail(
#             f"New Customer Booked A table "
#             f"New Reservation Request - {n}",
#             f"New table reservation received:\n\n"
#             f"Name: {n}\n"
#             f"Phone: {p}\n"
#             f"Email: {e}\n"
#             f"Guests: {g}\n"
#             f"Date: {d}\n"
#             f"Time: {t}\n"
#             f"Special Requests: {sr or 'None'}\n",
#             "ap5766709@gmail.com",
#             ["ap5766709@gmail.com"],
#             fail_silently=False,
#         )

#         send_mail(
#             "We've Received Your Reservation Request - Swadeshi Rasoi",
#             f"Hi {n},\n\n"
#             f"Thank you for choosing us! We've received your reservation request for "
#             f"{g} on {d} at {t}.\n\n"
#             f"Our team will confirm your table shortly via email with your table number.\n\n"
#             f"Regards,\nSwadeshi Rasoi Team",
#             "ap5766709@gmail.com",
#             [e],
#             fail_silently=False,
#         )

#         return JsonResponse({"message": "Reservation created successfully"})

#     return JsonResponse({"error": "Only POST allowed"}, status=405)