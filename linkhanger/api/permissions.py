
from rest_framework.permissions import BasePermission


class BlocklistPermission(BasePermission):
    """
    Global permission check for blocked IPs.
    """

    def has_permission(self, request, view):
        if request.user:
            return True
