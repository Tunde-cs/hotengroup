from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('inspections/', views.inspection_booking_view, name='inspections'),
    path('contact/', views.contact, name='contact'),
]

