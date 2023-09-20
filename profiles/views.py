from rest_framework import generics
from .models import Profile, UserProfile, EmployerProfile
from .serializers import (
    ProfileSerializer,
    UserProfileSerializer,
    EmployerProfileSerializer
)
from devexchange.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class UserProfileList(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class EmployerProfileList(generics.ListAPIView):
    serializer_class = EmployerProfileSerializer
    queryset = EmployerProfile.objects.all()


class ProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.all()


class UserProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = UserProfile.objects.all()


class EmployerProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = EmployerProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = EmployerProfile.objects.all()
