import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import useNotes from '../hooks/useNotes';

const EditNoteScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { noteid } = route.params as { noteid: string };
  const { notes, updateNote } = useNotes();
  const note = notes.find(n => n.noteId === noteid);

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleUpdate = () => {
    if (note) {
      updateNote(note.noteId, title, content);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Update Note" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
    fontSize: 16,
  },
});

export default EditNoteScreen;
