import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useNotes from '../hooks/useNotes';

const NoteDetailScreen: React.FC = () => {
  const route = useRoute();
  const { noteid } = route.params as { noteid: string };
  const { notes } = useNotes();
  const note = notes.find(n => n.noteId === noteid);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Note not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginTop: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default NoteDetailScreen;
