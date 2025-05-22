import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
            <Text style={styles.heading}>
                🎣 Welcome to Catch Fishing Jokes – the ultimate card game for anglers!
            </Text>
            <Text style={styles.paragraph}>
                Whether you're by the lake, on a boat, or chilling at camp — this app brings the fun to your fishing trip.
            </Text>
            <Text style={styles.paragraph}>
                Challenge your friends with guessing cards, discover cool facts, and laugh out loud with fishy jokes! 🐟🤣
            </Text>

            <Text style={styles.sectionTitle}>🎮 Fishing Guess Deck</Text>
            <Text style={styles.paragraph}>
                Test your fishing knowledge in a fun, fast-paced guessing game!
            </Text>
            <Text style={styles.paragraph}>
                Each round presents you with a card describing a fish species 🐠, lure 🎣, or fishing tool 🧰 — your task is to guess what it is.
            </Text>
            <Text style={styles.paragraph}>
                Play solo or with friends, track your correct answers, and see who becomes the fishing master! 🏆
            </Text>

            <Text style={styles.sectionTitle}>😂 Fishing Jokes</Text>
            <Text style={styles.paragraph}>
                Take a break and enjoy a collection of hand-picked fishing jokes guaranteed to make you smile.
            </Text>
            <Text style={styles.paragraph}>
                From dad jokes to clever puns — there’s always something to reel in! 🎏
            </Text>
            <Text style={styles.paragraph}>
                Tap to reveal punchlines and submit your own jokes to keep the fun going!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002F87',
    },
    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    paragraph: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
        lineHeight: 22,
    },
});
