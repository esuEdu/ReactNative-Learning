import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';
type RootStackParamList = {
  AnimalList: undefined;
  AnimalDetail: { animalName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AnimalListScreen = ({ navigation, animals }: { navigation: any; animals: Array<{ id: string; name: string }> }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AnimalDetail', { animalName: item.name })}
          >
            <Text style={{ fontSize: 24, padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const AnimalDetailScreen = ({ route }: { route: any }) => {
  const { animalName } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>{animalName}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        This is the detail view for {animalName}.
      </Text>
    </View>
  );
};

export default function App() {
  const [animals, setAnimals] = useState([
    { id: '1', name: 'Lion' },
    { id: '2', name: 'Elephant' },
    { id: '3', name: 'Giraffe' },
    { id: '4', name: 'Zebra' },
  ]);

  const addAnimal = (name: string) => {
    const newId = uuidv4();
    setAnimals((prevAnimals) => [...prevAnimals, { id: newId, name }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimalList">
        <Stack.Screen
          name="AnimalList"
          options={({ navigation }) => ({
            title: 'Animal List',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  addAnimal('Tiger'); // Adding 'Tiger' to the list
                }}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => <AnimalListScreen {...props} animals={animals} />}
        </Stack.Screen>
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} options={{ title: 'Animal Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
