from django.urls import path

from . import views
from .views import Create

urlpatterns = [
    path('', Create.as_view(), name='create'),
]