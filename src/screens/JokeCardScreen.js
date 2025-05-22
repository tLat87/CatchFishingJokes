import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Share, Alert, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addJoke} from '../redux/slices/savedJokesSlice';

const jokes = [
    { question: "Why did the fish get bad grades?", answer: "Because it was below sea level!" },
    { question: "Why don’t skeletons fight each other?", answer: "They don’t have the guts!" },

    { question: "What do you call a fish without eyes?", answer: "Fsh." },
    { question: "Why don’t fish do well in school?", answer: "Because they’re always swimming below average." },
    { question: "How do fish always know how much they weigh?", answer: "Because they have their own scales!" },
    { question: "What did the fisherman say to the magician?", answer: "Pick a cod, any cod!" },
    { question: "Why did the fisherman bring a ladder?", answer: "Because he was going after high perch!" },
    { question: "What kind of music should you listen to while fishing?", answer: "Something catchy!" },
    { question: "What’s a fish’s favorite instrument?", answer: "The bass guitar." },
    { question: "Why do fish live in salt water?", answer: "Because pepper makes them sneeze!" },
    { question: "What did the fish say when it hit the wall?", answer: "Dam." },
    { question: "How do you tune a fishing rod?", answer: "With a reel good ear." },
    { question: "Why was the fish blushing?", answer: "Because it saw the ocean’s bottom." },
    { question: "What’s the most valuable fish?", answer: "A goldfish!" },
    { question: "Why was the fisherman good at poker?", answer: "Because he knew how to bluff!" },
    { question: "What kind of fish only comes out at night?", answer: "A starfish." },

    { question: "I caught a fish so big, I needed help to lift it!", answer: "Yeah, from Photoshop!" },
    { question: "I told my wife I was going fishing to relax.", answer: "She said, ‘Then why do you scream every time you miss a bite?’" },
    { question: "That fish was THIS big!", answer: "Said every fisherman ever." },
    { question: "I spent 8 hours fishing and caught nothing.", answer: "But hey, I avoided my responsibilities!" },
    { question: "I got hooked today.", answer: "On fishing memes, not fish." },
    { question: "I went fishing with my buddy — he brought snacks, I brought skill.", answer: "We both left hungry." },
    { question: "Fishing is about patience.", answer: "And pretending you're not mad when your line tangles for the fifth time." },
    { question: "I finally got a bite!", answer: "Too bad it was from a mosquito." },
    { question: "My fishing rod snapped in half today.", answer: "Just like my hopes and dreams." },
    { question: "They say plenty of fish in the sea...", answer: "Yeah, but they keep ghosting me." },
    { question: "I caught a cold instead of a fish.", answer: "Still counts, right?" },
    { question: "Why do I keep going fishing?", answer: "Because I like getting sunburnt while failing publicly." },
    { question: "I brought my lucky hat for fishing.", answer: "Now it's just a wet hat." },
    { question: "You should’ve seen the one that got away.", answer: "He was wearing sunglasses and laughing." },
    { question: "My fish finder says there’s fish here.", answer: "But I think they’re hiding on purpose." },
    { question: "I caught something huge today!", answer: "Turned out to be a tree branch." },
    { question: "My tackle box is full.", answer: "Of lures the fish ignore." },
    { question: "I named my boat ‘The Codfather’.", answer: "It makes offers fish can’t refuse." },
    { question: "I brought a net this time.", answer: "Still no catch, but I did feel professional." },
    { question: "Fishing clears my mind.", answer: "Mostly because I leave it at home." },
    { question: "I bought a new reel!", answer: "Now I just need real skill." },
    { question: "I went night fishing.", answer: "Caught three mosquitoes and a cold." },
    { question: "I always practice catch and release.", answer: "Mostly because I never catch anything." },
    { question: "I lost my lure.", answer: "And a piece of my soul with it." },
    { question: "That fish looked me in the eye.", answer: "And swam away... disappointed." },
    { question: "I upgraded my rod.", answer: "Still can't upgrade my luck." },
    { question: "The fish aren’t biting today.", answer: "Probably busy making TikToks." },
    { question: "I almost had it!", answer: "But my knot said otherwise." },
    { question: "I fish to relax.", answer: "And end up untangling line for hours." },
    { question: "I asked a fish out.", answer: "It said, ‘I’m hooked on someone else.’" },
];


const JokeCardScreen = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    const currentJoke = jokes[currentIndex];

    const handleReveal = () => {
        setShowAnswer(true);
    };

    const handleNext = () => {
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev + 1) % jokes.length);
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${currentJoke.question} - ${currentJoke.answer}`,
        });
        } catch (error) {
            Alert.alert(error.message);
        }
    };


    const handleSaveJoke = () => {
        console.log(currentJoke);
        dispatch(addJoke(currentJoke));
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.question}>{currentJoke.question}</Text>
                {showAnswer && (
                    <>
                        <Text style={styles.answer}>{currentJoke.answer}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.iconButton} onPress={handleSaveJoke}>
                                <Image source={require('../assets/img/Framfqwf3.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
                                <Image source={require('../assets/img/Framefqwf47.png')} />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
            <TouchableOpacity style={styles.revealButton} onPress={showAnswer ? handleNext : handleReveal}>
                <Text style={styles.revealText}>{showAnswer ? "Next" : "Tap to Reveal"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default JokeCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0033a0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#0052cc',
        padding: 20,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#EA173B',
        width: '85%',
        justifyContent: 'center',
        height: '55%',
        alignItems: 'center',
        marginBottom: 30,
    },
    question: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    answer: {
        backgroundColor: '#ffc107',
        padding: 10,
        borderRadius: 10,
        color: '#000',
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 15,
        gap: 15,
    },
    iconButton: {
        backgroundColor: '#ff6f00',
        borderRadius: 50,
        padding: 10,
    },
    revealButton: {
        backgroundColor: '#0033a0',
    },
    revealText: {
        color: '#FFFFFF99',
        fontSize: 24,
        // textDecorationLine: 'underline',
    },
});
