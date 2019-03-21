from django.shortcuts import render
from customer.models import Customer
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from customer.serializers import CustomerSerializer
# Create your views here.

class CustomerList(APIView):
    """
    List all Customer, or create a new Customer.
    """
    def get(self, request, format=None):
        customer = Customer.objects.all()
        serializer = CustomerSerializer(customer, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class CustomerDetail(APIView):
    """
    Retrieve, update or delete a Customer instance.
    """
    def get_object(self, pk):
        try:
            return Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Customer = self.get_object(pk)
        serializer = CustomerSerializer(Customer)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        Customer = self.get_object(pk)
        serializer = CustomerSerializer(Customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        Customer = self.get_object(pk)
        Customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)