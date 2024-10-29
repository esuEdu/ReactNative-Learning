import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = string;

export default function App() {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('@tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const saveTasks = async (tasks: Task[]) => {
        try {
            await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
        } catch (error) {
            console.log(error);
        }
    };

    const addTask = () => {
        if (task.trim() === '') return;
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        setTask('');
        saveTasks(newTasks);
    };

    const renderTask = ({ item }: { item: Task }) => (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tarefas</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    taskContainer: {
        padding: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 10,
    },
    taskText: {
        fontSize: 16,
    },
});

