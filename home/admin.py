from django.contrib import admin
from .models import InspectionBooking

@admin.register(InspectionBooking)
class InspectionBookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'preferred_date', 'preferred_time', 'submitted_at')
    list_filter = ('preferred_date',)
    search_fields = ('name', 'email', 'phone', 'property_address')
