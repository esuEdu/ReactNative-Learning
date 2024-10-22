import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top navigation bar with 5 buttons */}
        <View style={styles.topNavBar}>
          <TouchableOpacity style={styles.navButton}><Text>Btn 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Text>Btn 2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Text>Btn 3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Text>Btn 4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Text>Btn 5</Text></TouchableOpacity>
        </View>

        {/* Spacer between nav bar and content */}
        <View style={styles.spacer} />

        {/* Center card with buttons in corners */}
        <View style={styles.centerCard}>
          <TouchableOpacity style={styles.topLeftButton}><Text>TL</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topRightButton}><Text>TR</Text></TouchableOpacity>
          <View style={styles.circleCenter} />
          <TouchableOpacity style={styles.bottomRightButton}><Text>BR</Text></TouchableOpacity>
        </View>

        {/* Spacer between center card and small cards */}
        <View style={styles.spacer} />

        {/* Three small cards in a row */}
        <View style={styles.cardRow}>
          <View style={styles.smallCard}><Text>Card 1</Text></View>
          <View style={styles.smallCard}><Text>Card 2</Text></View>
          <View style={styles.smallCard}><Text>Card 3</Text></View>
        </View>

        {/* Spacer between small cards and buttons */}
        <View style={styles.spacer} />

        {/* Bottom row of 4 buttons */}
        <View style={styles.bottomButtonRow}>
          <TouchableOpacity style={styles.bottomButton}><Text>Btn A</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}><Text>Btn B</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}><Text>Btn C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}><Text>Btn D</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensure vertical distribution
    alignItems: 'center',
  },
  topNavBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  spacer: {
    flex: 1, // Adds flexible spacing between elements
  },
  centerCard: {
    width: 300,
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  topLeftButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  topRightButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  circleCenter: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 50,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  smallCard: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20, // Adds padding to sides
  },
  bottomButton: {
    padding: 15,
    backgroundColor: '#ccc',
    borderRadius: 5,
    flex: 1, // Ensure buttons fill the width equally
    marginHorizontal: 5, // Adds space between buttons
    alignItems: 'center',
  },
});

export default HomeScreen;
