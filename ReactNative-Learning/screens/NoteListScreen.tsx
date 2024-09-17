import React, { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import useNotes from '../hooks/useNotes';
import NoteCard from '../components/NoteCard';
import Loading from '../components/Loading';
import { RootStackParamList } from '../navigation/types'; // Import the types

type NoteListScreenNavigationProp = NavigationProp<RootStackParamList, 'NoteList'>;

const NoteListScreen: React.FC = () => {
  const navigation = useNavigation<NoteListScreenNavigationProp>(); // Apply the navigation type
  const { notes, loading } = useNotes();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="add-circle-outline"
          size={30}
          color="#007BFF"
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate('CreateNote')} // Navigation is now typed
        />
      ),
    });
  }, [navigation]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.noteId}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <NoteCard title={item.title} content={item.content} />
            <Button 
              title="View Details" 
              onPress={() => navigation.navigate('NoteDetail', { noteid: item.noteId })} 
            />
            <Button 
              title="Edit Note" 
              onPress={() => navigation.navigate('EditNote', { noteid: item.noteId })} 
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  noteContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default NoteListScreen;
