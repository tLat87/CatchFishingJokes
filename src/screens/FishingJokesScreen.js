import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteJoke} from '../redux/slices/jokesSlice';

const FishingJokesScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('jokes');
    const jokes = useSelector((state) => state.jokes);

    const dispatch = useDispatch();

    const renderJokeCard = ({ item, index }) => (
        <View style={styles.jokeCard}>
            <Text style={styles.jokeEmoji}>😂</Text>
            <View style={styles.jokeTextContainer}>
                <Text style={styles.jokeSetup}>{item.setup}</Text>
                <Text style={styles.jokePunchline}>{item.punchline}</Text>
            </View>
            <TouchableOpacity
                onPress={() => dispatch(deleteJoke(index))}
                style={styles.deleteButton}
            >
                <Text style={styles.deleteText}>🗑</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'jokes' && styles.activeTab]}
                    onPress={() => setActiveTab('jokes')}>
                    <Text style={[styles.tabText, activeTab === 'jokes' && styles.activeTabText]}>
                        Jokes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'myJokes' && styles.activeTab]}
                    onPress={() => setActiveTab('myJokes')}>
                    <Text style={[styles.tabText, activeTab === 'myJokes' && styles.activeTabText]}>
                        My Jokes
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            {activeTab === 'jokes' ? (
                <>
                    <View style={styles.card}>
                        <Text style={styles.emoji}>😂</Text>
                        <Text style={styles.title}>Ready to Laugh?</Text>
                        <Text style={styles.subtitle}>Tap below to reveal a random fishing joke</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('JokeCardScreen')}>
                        <Text style={styles.buttonText}>Show Me a Joke</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <FlatList
                        data={jokes}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderJokeCard}
                        contentContainerStyle={{ gap: 20 }}
                    />
                    <TouchableOpacity
                        style={[styles.button, { marginTop: 30 }]}
                        onPress={() => navigation.navigate('CreateJokeScreen')}>
                        <Text style={styles.buttonText}>Create Joke</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default FishingJokesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01328A',
        padding: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#002568',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 40,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#FFC100',
        borderRadius: 12,
    },
    deleteButton: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    deleteText: {
        fontSize: 20,
        color: '#ff6b6b',
    },
    tabText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#000000',
    },
    card: {
        backgroundColor: '#002568',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        marginBottom: 40,
    },
    emoji: {
        fontSize: 40,
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#b0c4de',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FFC100',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

    // Joke Card Styles
    jokeCard: {
        flexDirection: 'row',
        backgroundColor: '#002568',
        borderRadius: 20,
        padding: 20,
        alignItems: 'flex-start',
    },
    jokeEmoji: {
        fontSize: 28,
        marginRight: 15,
    },
    jokeTextContainer: {
        flex: 1,
    },
    jokeSetup: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    jokePunchline: {
        color: '#b0c4de',
        fontSize: 14,
    },
});
