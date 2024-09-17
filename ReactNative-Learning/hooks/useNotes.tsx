import { useState, useEffect } from 'react';
import { getNotes, saveNote, modifyNote, deleteNote } from '../api/notesApi';

interface Note {
  noteId: string;
  title: string;
  content: string;
}

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (err) {
      console.error('Error fetching notes:', err);
      setError('Failed to load notes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createNote = async (note: Note) => {
    setError(null);
    try {
      await saveNote(note);
      await fetchNotes();
    } catch (err) {
      console.error('Error creating note:', err);
      setError('Failed to create note. Please try again.');
    }
  };

  const updateNote = async (noteId: string, updateKey: string, updateValue: string) => {
    setError(null);
    try {
      await modifyNote(noteId, updateKey, updateValue);
      fetchNotes();
    } catch (err) {
      console.error('Error updating note:', err);
      setError('Failed to update note. Please try again.');
    }
  };

  const removeNote = async (noteId: string) => {
    setError(null);
    try {
      await deleteNote(noteId);
      fetchNotes();
    } catch (err) {
      console.error('Error deleting note:', err);
      setError('Failed to delete note. Please try again.');
    }
  };

  return { notes, loading, error, createNote, updateNote, removeNote };
};

export default useNotes;
