import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0); // Estado para armazenar o número de pessoas

  // Função para incrementar o número de pessoas
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Função para decrementar o número de pessoas (sem permitir valores negativos)
  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3498db',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;

