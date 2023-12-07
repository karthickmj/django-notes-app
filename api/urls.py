from django.urls import path
from .views import *

urlpatterns = [
    path('', getRoutes, name="routes"),
    path('notes/', getNotes, name="notes"),
    path('notes/<str:pk>/update/', updateNote, name="update-note"),
    path('notes/<str:pk>/delete/', deleteNote, name="delete-note"),
    path('notes/create/', createNote, name="create-note"),
    path('notes/<str:pk>/', getNote, name="note"),
    path('folders/', getFolders, name="folders"),
    path('folders/create/', createFolder, name="create-folder"),
    path('folders/<str:pk>/update/', updateFolder, name="update-folder"),
    path('folders/<str:pk>/delete/', deleteFolder, name="delete-folder"),
]
