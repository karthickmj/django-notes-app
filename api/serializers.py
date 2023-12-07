from rest_framework.serializers import ModelSerializer
from .models import Note, Folder


class FolderSerializer(ModelSerializer):
    class Meta:
        model = Folder
        fields = ('id', 'name', 'created_at')


class NoteSerializer(ModelSerializer):
    folder = FolderSerializer(read_only=True)

    class Meta:
        model = Note
        fields = '__all__'
