import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Exemplo de frases de sorte (pode ser modificado para API)
const fortunes = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo."
];

const App = () => {
  const [broken, setBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  // Função para "quebrar" o biscoito e mostrar a frase
  const breakCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setBroken(true);
  };

  // Função para resetar o biscoito
  const resetCookie = () => {
    setBroken(false);
    setFortune('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={broken ? resetCookie : breakCookie}>
        <Image
          source={broken ? require('./assets/opened_cookie.png') : require('./assets/closed_cookie.png')}
          style={styles.cookieImage}
        />
      </TouchableOpacity>

      {broken && (
        <Text style={styles.fortuneText}>
          {fortune}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={broken ? resetCookie : breakCookie}>
        <Text style={styles.buttonText}>
          {broken ? "Tente outra vez" : "Quebre o biscoito"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#f39c12',
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

