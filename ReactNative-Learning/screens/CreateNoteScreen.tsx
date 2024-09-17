import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import useNotes from '../hooks/useNotes';
import { useNavigation } from '@react-navigation/native';

const CreateNoteScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createNote } = useNotes();
  const navigation = useNavigation();

  const handleSave = () => {
    const note = {
      noteId: Date.now().toString(),
      title,
      content,
    };
    createNote(note);
    navigation.goBack();
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
      <Button title="Save Note" onPress={handleSave} />
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

export default CreateNoteScreen;
