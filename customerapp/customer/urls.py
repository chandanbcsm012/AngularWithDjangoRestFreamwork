from django.urls import path
from customer.views import CustomerList, CustomerDetail

urlpatterns = [
    path('', CustomerList.as_view()),
    path('<int:pk>/', CustomerDetail.as_view()),
]