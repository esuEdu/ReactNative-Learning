import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  // Estado inicial das preferências
  const [theme, setTheme] = useState<string>('Claro');
  const [fontSize, setFontSize] = useState<number>(16);
  const [nightMode, setNightMode] = useState<boolean>(false);

  // Função para resetar as preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.preference}>
        <Text style={styles.title}>Preferências</Text>
          <Text style={styles.label}>Tema</Text>
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Claro" value="Claro" />
            <Picker.Item label="Escuro" value="Escuro" />
            <Picker.Item label="Automático" value="Automático" />
          </Picker>
        </View>
        <View style={styles.preference}>
          <Text style={styles.label}>Tamanho da Fonte</Text>
          <Slider
            style={styles.slider}
            minimumValue={12}
            maximumValue={30}
            step={1}
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
          />
          <Text>{fontSize}</Text>
        </View>
        <View style={styles.preference}>
          <Text style={styles.label}>Modo Noturno</Text>
          <Switch
            value={nightMode}
            onValueChange={(value) => setNightMode(value)}
          />
          <Text>{nightMode ? 'Ativado' : 'Desativado'}</Text>
        </View>
        <Button title="Resetar Preferências" onPress={resetPreferences} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
label: {
  fontSize: 18,
  marginBottom: 10,
},
preference: {
  marginBottom: 20,
  marginHorizontal: 16,
},
picker: {},
slider: {},
});

export default App;
