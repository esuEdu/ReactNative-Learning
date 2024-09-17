import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Note {
  noteid: string;
  title: string;
  content: string;
}

interface NotesContextProps {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (noteId: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(notes.map(note => note.noteid === updatedNote.noteid ? updatedNote : note));
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.noteid !== noteId));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return context;
};
