import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function WelcomeScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require('../assets/img/fqwf.png')}
            style={styles.character}
            resizeMode="contain"
          />
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            🎣 A fun card game for anglers who love guessing, laughing, and
            learning! Test your fishing knowledge, enjoy fishy jokes, and
            challenge your friends on the water or by the campfire!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.buttonText}>Let’s Start Fishing!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01328A',
        alignItems: 'center',
        // justifyContent: 'space-between',
        padding: 20,
    },
    topSection: {
        alignItems: 'flex-end',
        marginTop: 20,
        width: '100%',
    },
    character: {
        width: 300,
        height: 400,
    },
    speechBubble: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12,
        marginTop: -40,
    },
    speechText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
    card: {
        width: 120,
        height: 160,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        transform: [{ rotate: '10deg' }],
        backgroundColor: '#001F5C',
    },
    emoji: {
        fontSize: 24,
    },
    fish: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    descriptionBox: {
        backgroundColor: '#002568',
        borderRadius: 16,
        padding: 16,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    descriptionText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 20,
    },
    button: {
        backgroundColor: '#FFC100',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
