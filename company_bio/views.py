from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, permissions
from devexchange.permissions import IsEmployerOrReadOnly, IsOwnerOrReadOnly
from .models import CompanyBio
from .serializers import CompanyBioSerializer


class CompanyBioList(generics.ListCreateAPIView):
    """
    API endpoint to list and create CompanyBio instances.
    """
    queryset = CompanyBio.objects.all()
    serializer_class = CompanyBioSerializer
    permission_classes = [IsEmployerOrReadOnly]

    filterset_fields = [
        'owner__profile',
    ]

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
    """
    API endpoint to retrieve, update, or delete a specific CompanyBio instance.
    """
    queryset = CompanyBio.objects.all()
    serializer_class = CompanyBioSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
