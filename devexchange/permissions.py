from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user


class IsEmployerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only users with user_type='employer'
    to create company bio.
    """

    def has_permission(self, request, view):
        # Allow all authenticated users, regular and employer to view the list
        if request.method in permissions.SAFE_METHODS:
            return True
        # Check if the user is authenticated and has user_type='employer'
        return (
            request.user.is_authenticated
            and request.user.profile.user_type == 'employer'
        )


class IsRegularOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only users with user_type='regular'
    to create company bio.
    """

    def has_permission(self, request, view):
        # Allow all authenticated users, regular and employer to view the list
        if request.method in permissions.SAFE_METHODS:
            return True
        # Check if the user is authenticated and has user_type='regular'
        return (
            request.user.is_authenticated
            and request.user.profile.user_type == 'regular'
        )
