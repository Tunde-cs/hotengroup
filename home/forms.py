from django import forms
from .models import InspectionBooking

class InspectionBookingForm(forms.ModelForm):
    class Meta:
        model = InspectionBooking
        fields = [
            "name", "email", "phone",
            "property_address", "preferred_date", "preferred_time", "notes"
        ]
        widgets = {
            "preferred_date": forms.DateInput(attrs={"type": "date", "class": "form-control"}),
            "preferred_time": forms.TimeInput(attrs={"type": "time", "class": "form-control"}),
            "notes": forms.Textarea(attrs={"rows": 3, "class": "form-control"}),
            "property_address": forms.Textarea(attrs={"rows": 2, "class": "form-control"}),
        }

