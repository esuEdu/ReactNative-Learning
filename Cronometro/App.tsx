import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const pauseTimer = () => {
    if (running) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const lapTimer = () => {
    setLaps((prevLaps) => [time, ...prevLaps]);
  };

  const resetTimer = () => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.timeText}>{formatTime(time)}</Text>
        <View style={styles.buttonContainer}>

          {running ? (
            <TouchableOpacity style={styles.lapButton} onPress={lapTimer}>
              <Text style={styles.lapButtonText}>Lap</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.startPauseButton}
            onPress={running ? pauseTimer : startTimer}
          >
            <Text style={styles.startPauseButtonText}>
              {running ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={laps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.lapItem}>
              <Text style={styles.lapText}>Lap {index + 1}</Text>
              <Text style={styles.lapTime}>{formatTime(item)}</Text>
            </View>
          )}
          style={styles.lapList}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 90,
    fontWeight: '200',
    color: '#000',
    marginBottom: 60,
    letterSpacing: 2,
    marginTop: 80,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  startPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4cd964',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  startPauseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  lapButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  lapButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  lapList: {
    width: '80%',
    marginTop: 20,
  },
  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lapText: {
    fontSize: 18,
    color: '#000',
  },
  lapTime: {
    fontSize: 18,
    color: '#000',
  },
});

export default App;
