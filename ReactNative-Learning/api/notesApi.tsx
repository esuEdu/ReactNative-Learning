import axios from 'axios';

const API_BASE_URL = '';

interface Note {
  noteId: string;
  title: string;
  content: string;
}

export const getNote = async (noteId: string) => {
  try {
    const response = await axios.get<Note>(`${API_BASE_URL}/note`, { params: { noteid: noteId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching the note:', error);
    throw error; // rethrow the error if you want to handle it further up the chain
  }
};

export const getNotes = async () => {
  try {
    const response = await axios.get<{ notes: Note[] }>(`${API_BASE_URL}/notes`);
    return response.data.notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const saveNote = async (note: Note) => {
  try {
    const response = await fetch(`${API_BASE_URL}/note`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noteId: note.noteId, // Ensuring the key is named 'noteId'
        title: note.title,
        content: note.content,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error saving the note:', errorData);
      throw new Error(`Error saving the note: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error saving the note:', error.message);
    throw error;
  }
};

export const modifyNote = async (noteId: string, updateKey: string, updateValue: string) => {
  try {
    const requestBody = { noteId, updateKey, updateValue };

    const response = await fetch(`${API_BASE_URL}/note`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error modifying the note:', errorData);
      throw new Error(`Error modifying the note: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error modifying the note:', error.message);
    throw error;
  }
};


export const deleteNote = async (noteId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/note`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ noteId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error deleting the note:', errorData);
      throw new Error(`Error deleting the note: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error deleting the note:', error.message);
    throw error;
  }
};

