from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, permissions
from devexchange.permissions import IsEmployerOrReadOnly, IsOwnerOrReadOnly
from .models import CompanyBio
from .serializers import CompanyBioSerializer


class CompanyBioList(generics.ListCreateAPIView):
    queryset = CompanyBio.objects.all()
    serializer_class = CompanyBioSerializer
    permission_classes = [IsAuthenticated, IsEmployerOrReadOnly]

    def perform_create(self, serializer):
        # Automatically set the owner to the current user
        serializer.save(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError as e:
            return Response(
                {"error": "You already have a company bio."},
                status=status.HTTP_400_BAD_REQUEST
            )


class CompanyBioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CompanyBio.objects.all()
    serializer_class = CompanyBioSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
