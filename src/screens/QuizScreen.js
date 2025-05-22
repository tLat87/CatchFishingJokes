import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {saveQuestion} from '../redux/slices/savedQuestionsSlice';
import {useDispatch} from 'react-redux';

const questions = [
    { question: "This sharp-toothed freshwater predator is known for ambushing prey and lives in northern lakes.", answer: "Pike" },
    { question: "A common panfish with blue or green shades and a round body, often caught by beginners.", answer: "Bluegill" },
    { question: "This migratory fish returns to freshwater to spawn and is famous for its pink flesh.", answer: "Salmon" },
    { question: "This whiskered bottom-dweller is often found in muddy waters and is known for strong fights.", answer: "Catfish" },
    { question: "A silver, fast-swimming ocean fish, often targeted by saltwater anglers.", answer: "Mackerel" },
    { question: "This lure mimics a wounded baitfish and creates a wobbling action when retrieved.", answer: "Crankbait" },
    { question: "Shiny and spinning, this lure has a blade that flashes and vibrates in the water.", answer: "Spinnerbait" },
    { question: "This soft plastic lure often imitates a worm or lizard and is used in bass fishing.", answer: "Soft plastic bait" },
    { question: "Used for ice fishing, this vertical lure drops fast and jiggles to attract fish below.", answer: "Jig" },
    { question: "This surface lure creates popping sounds and is used to attract fish near the top.", answer: "Popper" },
    { question: "This tool helps remove the hook from the fish’s mouth without injuring your hand.", answer: "Pliers" },
    { question: "A long-handled tool with a mesh used to scoop a fish out of the water.", answer: "Landing net" },
    { question: "This item stores hooks, lures, and weights in separate compartments.", answer: "Tackle box" },
    { question: "A portable device used to measure the weight of your catch.", answer: "Fishing scale" },
    { question: "This accessory keeps your catch alive and fresh in the water while you continue fishing.", answer: "Live well" },
    { question: "This fish has black vertical stripes and is a favorite for ice fishing.", answer: "Perch" },
    { question: "A top game fish with a torpedo-shaped body and sharp vision, often caught in open water.", answer: "Walleye" },
    { question: "This large saltwater predator is famous for its long body and pointy snout.", answer: "Barracuda" },
    { question: "Known for its red spot and beautiful colors, this trout lives in cold mountain streams.", answer: "Brook trout" },
    { question: "This bony fish jumps when caught and is often found in warm coastal waters.", answer: "Tarpon" },
    { question: "Made of hair or feathers, this small fly imitates insects and is used in fly fishing.", answer: "Dry fly" },
    { question: "A soft-bodied topwater lure that looks like a frog and is great for catching bass in lily pads.", answer: "Frog lure" },
    { question: "This flashy spoon-shaped lure wobbles as it moves and is great for trout and pike.", answer: "Spoon lure" },
    { question: "A slow-sinking lure designed to mimic wounded prey near the surface.", answer: "Swimbait" },
    { question: "Used mostly in saltwater, this heavy lure is designed for vertical drop and bounce.", answer: "Bucktail jig" },
    { question: "A line-cutting tool that's safer than using your teeth.", answer: "Line cutter" },
    { question: "Used to hold the fishing rod securely on the shore or boat.", answer: "Rod holder" },
    { question: "A safety item worn around the waist or chest to keep you afloat.", answer: "Life vest" },
    { question: "A digital or analog device that measures water depth and shows fish under the boat.", answer: "Fish finder" },
    { question: "A handheld tool used to sharpen dull hooks.", answer: "Hook sharpener" },
    { question: "A fast-swimming saltwater fish with a yellow tail and blue back, often caught for sport.", answer: "Yellowfin tuna" },
    { question: "This flat fish hides on the ocean floor and has both eyes on one side of its head.", answer: "Flounder" },
    { question: "Known for its long whiskers and slimy skin, this nocturnal fish prefers deep river holes.", answer: "Eel" },
    { question: "This tropical fish is known for its colorful patterns and sharp spines.", answer: "Lionfish" },
    { question: "This aggressive freshwater fish has an oval shape and is covered in tough scales. It's also known as the 'panfish king'.", answer: "Crappie" },
    { question: "A lure designed to imitate the sound and splash of a fleeing baitfish on the surface.", answer: "Chugger" },
    { question: "This jointed lure has two or more body sections to create a lifelike swimming motion.", answer: "Jointed crankbait" },
    { question: "A scented bait shaped like a worm or grub, ideal for slow retrieval.", answer: "Soft plastic grub" },
    { question: "A lure coated in reflective foil to catch sunlight and attract fish visually.", answer: "Flash lure" },
    { question: "A rigged bait with multiple hooks and a weight, used for bottom fishing in deep water.", answer: "Bottom rig" },
    { question: "This tool measures your rod's tension and helps prevent line breakage.", answer: "Drag tester" },
    { question: "A protective glove designed to safely handle fish with sharp teeth or fins.", answer: "Fish handling glove" },
    { question: "A clip-on item used to organize multiple fishing rods in a boat or garage.", answer: "Rod rack" },
    { question: "A small, portable seat with built-in tackle storage.", answer: "Fishing stool box" },
    { question: "A tool for crimping sleeves or leaders when making heavy-duty rigs.", answer: "Crimping pliers" },
    { question: "A large freshwater fish with a wide mouth, often called a 'bucketmouth', prized by sport fishers.", answer: "Largemouth bass" },
    { question: "A saltwater fish known for its armor-like scales and ability to survive in brackish water.", answer: "Drum" },
    { question: "A long, thin fish with a pointed beak, capable of incredible speed in the ocean.", answer: "Marlin" },
    { question: "This bottom-dwelling freshwater fish is famous for its spotted body and is often caught at night.", answer: "Brown bullhead" },
    { question: "A colorful reef fish with bold stripes, often seen in tropical aquariums but also caught on light tackle.", answer: "Sergeant major" },
    { question: "A topwater lure shaped like a walking baitfish, designed for a side-to-side zigzag action.", answer: "Walking bait / Zara Spook" },
    { question: "A rig with two hooks and a spinner, often used with live bait for trolling.", answer: "Worm harness" },
    { question: "Bright-colored lure often tipped with a minnow, fished vertically in winter.", answer: "Ice jig" },
    { question: "A weedless lure with a rubber skirt that vibrates and flashes, great for murky water.", answer: "Bladed jig (Chatterbait)" },
    { question: "A bait shaped like a small fish, used for trolling in deep ocean waters.", answer: "Trolling plug" },
    { question: "A floating device attached to your line to detect bites.", answer: "Bobber" },
    { question: "A ruler marked with legal size limits for measuring your catch.", answer: "Fish ruler" },
    { question: "Used to keep dead fish cold on a long trip.", answer: "Cooler" },
    { question: "A wire or rope line used to secure multiple fish in the water.", answer: "Stringer" },
    { question: "A portable rod that collapses into itself for easy travel.", answer: "Telescopic rod" }
];

export default function QuizCardScreen({ route, navigation }) {
    const { players, rounds, discussionTime } = route.params;
    const dispatch = useDispatch();
    const [scores, setScores] = useState(() => {
        const initialScores = {};
        players.forEach(player => { initialScores[player] = 0; });
        return initialScores;
    });

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentRound, setCurrentRound] = useState(1);
    const [showAnswer, setShowAnswer] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(discussionTime * 60); // in seconds

    const currentQuestion = questions[questionIndex % questions.length];
    const currentPlayer = players[currentPlayerIndex];

    // Timer countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setShowAnswer(false);

        // Update player and round
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex((prev) => prev + 1);
        } else {
            setCurrentPlayerIndex(0);
            if (currentRound < rounds) {
                setCurrentRound((prev) => prev + 1);
            } else {
                navigation.navigate('Setup'); // or show results
                return;
            }
        }

        setQuestionIndex((prev) => prev + 1);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleCorrect = () => {
        const updated = { ...scores };
        updated[currentPlayer]++;
        setScores(updated);
        handleNext();
    };


    if (currentRound >= rounds && currentPlayerIndex === players.length - 1) {
        navigation.navigate('ResultsScreen', { scores });
        return;
    }


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topText}>Round {currentRound} / {rounds}   |   {currentPlayer}</Text>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => dispatch(saveQuestion(currentQuestion))}
                >
                    <Text style={styles.saveButtonText}>⭐ Save</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.timer}>⏱ {formatTime(timeLeft)}</Text>


            <View style={styles.card}>
                <Text style={styles.question}>{currentQuestion.question}</Text>
                {showAnswer && (
                    <>
                        <Text style={styles.answer}>{currentQuestion.answer}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.iconButton} onPress={handleNext}>
                                <Text style={styles.iconText}>Was Wrong</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButtonRight} onPress={handleCorrect}>
                                <Text style={styles.iconText}>Got It Right</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>

            {!showAnswer && (
                <TouchableOpacity style={styles.revealButton} onPress={() => setShowAnswer(true)}>
                    <Text style={styles.revealText}>Tap to Reveal</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002F87',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    timer: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#0052cc',
        padding: 25,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#EA173B',
        width: '85%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    question: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 10,
    },
    saveButton: {
        backgroundColor: '#ffc107',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    saveButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },

    answer: {
        backgroundColor: '#ffc107',
        padding: 10,
        borderRadius: 10,
        color: '#000',
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 15,
    },
    iconButton: {
        backgroundColor: '#FF4444',
        borderRadius: 10,
        padding: 12,
    },
    iconButtonRight: {
        backgroundColor: '#00C853',
        borderRadius: 10,
        padding: 12,
    },
    iconText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    revealButton: {
        backgroundColor: 'transparent',
    },
    revealText: {
        color: '#FFFFFF99',
        fontSize: 24,
    },
});
