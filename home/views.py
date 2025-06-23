from django.shortcuts import render
from django.urls import path
from django.shortcuts import render, redirect
from .forms import InspectionBookingForm
from django.core.mail import send_mail
from django.conf import settings


def index(request):
    return render(request, 'home/index.html')


def inspections(request):
    return render(request, 'home/inspections.html')


def contact(request):
    if request.method == "POST":
        # handle form submission (optional)
        pass
    return render(request, 'home/contact.html')


def inspection_booking_view(request):
    submitted = False
    if request.method == "POST":
        form = InspectionBookingForm(request.POST)
        if form.is_valid():
            booking = form.save()
            submitted = True

            # Send confirmation email to the user
            send_mail(
                subject='Inspection Booking Confirmation',
                message=(
                    f"Hello {booking.name},\n\n"
                    f"Thank you for booking a home inspection with Hoten Group.\n"
                    f"Your scheduled date: {booking.preferred_date}\n"
                    f"Time: {booking.preferred_time}\n\n"
                    "We will contact you soon to confirm the details.\n\n"
                    "Best regards,\n"
                    "Hoten Group Team"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[booking.email],
                fail_silently=False,
            )

            # Send notification email to admin
            send_mail(
                subject='New Inspection Booking Received',
                message=(
                    f"New inspection booking details:\n\n"
                    f"Name: {booking.name}\n"
                    f"Email: {booking.email}\n"
                    f"Phone: {booking.phone}\n"
                    f"Property Address: {booking.property_address}\n"
                    f"Preferred Date: {booking.preferred_date}\n"
                    f"Preferred Time: {booking.preferred_time}\n"
                    f"Notes: {booking.notes}\n"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],  # set this in settings.py
                fail_silently=False,
            )
    else:
        form = InspectionBookingForm()

    return render(request, "home/inspections.html", {"form": form, "submitted": submitted})