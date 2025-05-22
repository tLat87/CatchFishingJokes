// CreateJokeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {addJoke} from '../redux/slices/jokesSlice';

const CreateJokeScreen = () => {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSave = () => {
        if (setup && punchline) {
            dispatch(addJoke({ setup, punchline }));
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <View>

            <Text style={styles.label}>🧠 Setup</Text>
            <TextInput
                style={styles.input}
                value={setup}
                onChangeText={setSetup}
                placeholder="Enter setup..."
                placeholderTextColor="#888"
            />

            <Text style={styles.label}>🤣 Punchline</Text>
            <TextInput
                style={styles.input}
                value={punchline}
                onChangeText={setPunchline}
                placeholder="Enter punchline..."
                placeholderTextColor="#888"
            />
            </View>

            <TouchableOpacity
                style={[styles.button, !(setup && punchline) && styles.buttonDisabled]}
                onPress={handleSave}
                disabled={!(setup && punchline)}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateJokeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A2A7E',
        padding: 20,
        paddingBottom: 50,
        // justifyContent: 'center',
        justifyContent: 'space-between',
    },
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 8,
        marginTop: 16,
    },
    input: {
        backgroundColor: '#061E5C',
        borderRadius: 12,
        padding: 12,
        color: 'white',
    },
    button: {
        backgroundColor: '#FFC100',
        padding: 15,
        borderRadius: 16,
        marginTop: 40,
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
