import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import quotesData from './assets/quotes.json'; // Importe o JSON

interface Quote {
  quote: string;
  author: string;
  image: string;
}

const App = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  // Função para carregar uma nova citação aleatória
  const loadRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  };

  // Carrega uma citação ao iniciar o aplicativo
  useEffect(() => {
    loadRandomQuote();
  }, []);

  return (
    <View style={styles.container}>
      {currentQuote && (
        <>
          <Image
            source={{ uri: currentQuote.image }}
            style={styles.authorImage}
          />
          <Text style={styles.quoteText}>
            "{currentQuote.quote}"
          </Text>
          <Text style={styles.authorText}>
            - {currentQuote.author}
          </Text>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={loadRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

