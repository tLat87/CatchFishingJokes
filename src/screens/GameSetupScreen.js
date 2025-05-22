import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet, Image,
} from 'react-native';

export default function GameSetupScreen({navigation}) {
    const [rounds, setRounds] = useState(2);
    const [discussionTime, setDiscussionTime] = useState(1);
    const [players, setPlayers] = useState(['Player 1', 'Player 2']);

    const addPlayer = () => {
        const newPlayer = `Player ${players.length + 1}`;
        setPlayers([...players, newPlayer]);
    };

    const removePlayer = (index) => {
        const updated = [...players];
        updated.splice(index, 1);
        setPlayers(updated);
    };

    return (
        <View style={styles.container}>
            <Counter label="Rounds" value={rounds} onChange={setRounds} />

            <Counter
                label="Discussion Time (min)"
                value={discussionTime}
                onChange={setDiscussionTime}
            />

            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.playerRow}>
                        <TextInput style={styles.playerInput} value={item} editable={false} />
                        {players.length > 2 && (
                            <TouchableOpacity onPress={() => removePlayer(index)} style={styles.removeBtn}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>−</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
                style={{ marginTop: 10, marginBottom: 20,  zIndex: 1 }}
            />

            <Image source={require('../assets/img/Frame42.png')} style={{position: 'absolute', length: 0, bottom: 0, zIndex: 0}}/>
            <Image source={require('../assets/img/Frame3.png')} style={{position: 'absolute', right: 0, bottom: 100, zIndex: 0}}/>

            <TouchableOpacity style={styles.addBtn} onPress={addPlayer}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[{ backgroundColor: '#F5751A', marginTop: 10, borderRadius: 99, padding: 20, alignItems: 'center', justifyContent: 'center' }]}
                onPress={() =>
                    navigation.navigate('Quiz', {
                        players,
                        rounds,
                        discussionTime
                    })
                }
            >
                <Text style={[styles.addText, { color: 'white' }]}>Start Game</Text>
            </TouchableOpacity>

        </View>
    );
}

const Counter = ({ label, value, onChange }) => (
    <View style={styles.counter}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.counterRow}>
            <TouchableOpacity onPress={() => onChange(Math.max(1, value - 1))}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 50}}>
                    -
                </Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{value}</Text>
            <TouchableOpacity onPress={() => onChange(value + 1)}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginRight: 50}}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002F87',
        padding: 20,
        paddingTop: 50,
    },
    counter: {
        marginBottom: 15,
    },
    label: {
        color: 'white',
        marginBottom: 5,
    },
    counterRow: {
        backgroundColor: '#001E4D',
        borderRadius: 12,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    counterValue: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    playerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#001E4D',
        marginVertical: 4,
        borderRadius: 12,
        padding: 10,
        zIndex: 1
    },
    playerInput: {
        flex: 1,
        padding: 10,
        color: 'white',
    },
    removeBtn: {
        backgroundColor: '#FF4444',
        borderRadius: 12,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    addBtn: {
        backgroundColor: '#FFD700',
        width: 50,
        height: 50,
        marginBottom: 50,
        alignSelf: 'center',
        zIndex: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#002F87',
    },
});
