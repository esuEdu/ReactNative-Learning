import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import the types
import NoteListScreen from '../screens/NoteListScreen';
import NoteDetailScreen from '../screens/NoteDetailScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';

const Stack = createStackNavigator<RootStackParamList>(); // Apply types here

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NoteList">
        <Stack.Screen name="NoteList" component={NoteListScreen} options={{ title: 'Your Notes' }} />
        <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
        <Stack.Screen name="CreateNote" component={CreateNoteScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
