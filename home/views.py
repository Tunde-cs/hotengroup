from django.shortcuts import render
from django.urls import path
from django.shortcuts import render, redirect
from .forms import InspectionBookingForm


def index(request):
    return render(request, 'home/index.html')


def inspections(request):
    return render(request, 'home/inspections.html')


def contact(request):
    return render(request, "contact.html")


def inspection_booking_view(request):
    submitted = False
    if request.method == "POST":
        form = InspectionBookingForm(request.POST)
        if form.is_valid():
            form.save()
            submitted = True
    else:
        form = InspectionBookingForm()
    return render(request, "home/inspections.html", {"form": form, "submitted": submitted})


