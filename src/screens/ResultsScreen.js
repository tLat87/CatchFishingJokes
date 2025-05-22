import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ResultsScreen({ route, navigation }) {
    const { scores } = route.params;

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const champion = sorted[0];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏆 {champion[0]} is the Fishing Champion!</Text>
            <Text style={styles.subtitle}>With {champion[1]} correct answers, they've truly mastered the deck.</Text>

            {sorted.map(([player, score], index) => (
                <Text key={index} style={styles.playerScore}>
                    {player} – {score} correct answers
                </Text>
            ))}

            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.pop(3)}>
                <Text style={styles.menuText}>Menu</Text>
            </TouchableOpacity>

            <Image source={require('../assets/img/Frame3.png')} style={styles.imageRight} />
            <Image source={require('../assets/img/Frame42.png')} style={styles.imageLeft} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002F87',
        alignItems: 'center',
        padding: 20,
        // justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    playerScore: {
        color: 'white',
        fontSize: 16,
        marginVertical: 3,
    },
    menuButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 14,
        paddingHorizontal: 60,
        borderRadius: 20,
        marginTop: 30,
    },
    menuText: {
        color: '#002F87',
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // width: 100,
        // height: 100,
        resizeMode: 'contain',
    },
    imageRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        // width: 80,
        // height: 80,
        resizeMode: 'contain',
    },
});
