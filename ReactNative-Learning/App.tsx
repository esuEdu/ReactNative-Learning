import React from 'react';
import { NotesProvider } from './contexts/NotesContext';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <NotesProvider>
      <AppNavigator />
    </NotesProvider>
  );
};

export default App;
