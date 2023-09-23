from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, permissions
from devexchange.permissions import IsRegularOrReadOnly, IsOwnerOrReadOnly
from .models import UserSkill
from .serializers import UserSkillSerializer


class UserSkillList(generics.ListCreateAPIView):
    queryset = UserSkill.objects.all()
    serializer_class = UserSkillSerializer
    permission_classes = [IsAuthenticated, IsRegularOrReadOnly]

    def perform_create(self, serializer):
        # Automatically set the owner to the current user
        serializer.save(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError as e:
            return Response(
                {"error": "You already have skills set."},
                status=status.HTTP_400_BAD_REQUEST
            )


class UserSkillDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserSkill.objects.all()
    serializer_class = UserSkillSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
