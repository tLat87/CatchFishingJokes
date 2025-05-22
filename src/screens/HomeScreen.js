import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/img/8c27cff3182bf2e1e200fa07cd75606085c04630.png')}
                    style={styles.character}
                />
            </View>
            <View style={styles.cardGrid}>
                <Card title="Fishing Guess Deck" icon="🎮" onPress={() => {navigation.navigate('GameSetupScreen')}}/>
                <Card title="Fishing Jokes" icon="😂" onPress={() => {navigation.navigate('FishingJokesScreen')}}/>
                <Card title="My Saved Fishing Cards" icon="📁" onPress={() => {navigation.navigate('SavedScreen')}}/>
                <Card title="About" icon="ℹ️" onPress={() => {navigation.navigate('AboutScreen')}}/>
            </View>
        </View>
    );
}

function Card({ title, icon, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={{backgroundColor: '#F5751A', padding: 12, borderRadius: 99, fontSize: 22}}>{icon}</Text>
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01328A',
        paddingTop: 50,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -150,
    },
    character: {
        width: 320,
        height: 380,
        resizeMode: 'contain',
    },
    fish: {
        width: 100,
        height: 100,
        marginLeft: -30,
        borderWidth: 4,
        borderColor: '#FFBC00',
        borderRadius: 12,
    },
    cardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
    card: {
        width: 150,
        height: 120,
        backgroundColor: '#002568',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
    },
});
