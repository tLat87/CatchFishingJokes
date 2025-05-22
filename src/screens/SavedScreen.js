import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeQuestion} from '../redux/slices/savedQuestionsSlice';
import {removeJoke} from '../redux/slices/savedJokesSlice';

const SavedScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('jokes');

    const savedJokes = useSelector((state) => state.savedJokes);
    console.log('savedJokes: ', savedJokes);
    const savedQuestions = useSelector((state) => state.savedQuestions);
    const dispatch = useDispatch();


    const renderCard = (item, type) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate(type === 'jokes' ? 'FishingJokesScreen' : 'SavedQuestionsScreen')
            }>
            <Text style={styles.emoji}>😂</Text>
            <Text style={styles.cardTitle}>
                {type === 'jokes' ? 'Fishing Jokes' : 'Saved Questions'}
            </Text>
        </TouchableOpacity>
    );

    const renderSavedJoke = ({ item }) => (
        <View style={styles.savedCard}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.answerText}>🎣 {item.answer}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => dispatch(removeJoke(item))}
            >
                <Text style={styles.deleteButtonText}>🗑 Remove</Text>
            </TouchableOpacity>
        </View>
    );


    const isEmpty = activeTab === 'jokes' ? savedJokes.length === 0 : savedQuestions.length === 0;

    const renderSavedQuestion = ({ item }) => (
        <View style={styles.savedCard}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.answerText}>💡 {item.answer}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => dispatch(removeQuestion(item))}
            >
                <Text style={styles.deleteButtonText}>🗑 Remove</Text>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'questions' && styles.activeTab]}
                    onPress={() => setActiveTab('questions')}>
                    <Text style={[styles.tabText, activeTab === 'questions' && styles.activeTabText]}>
                        Saved Questions
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'jokes' && styles.activeTab]}
                    onPress={() => setActiveTab('jokes')}>
                    <Text style={[styles.tabText, activeTab === 'jokes' && styles.activeTabText]}>
                        Saved Jokes
                    </Text>
                </TouchableOpacity>
            </View>

            {isEmpty ? (
                <Text style={styles.emptyText}>📬 No {activeTab === 'jokes' ? 'jokes' : 'questions'} saved yet</Text>
            ) : activeTab === 'questions' ? (
                <FlatList
                    data={savedQuestions}
                    renderItem={renderSavedQuestion}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            ) : (
                <FlatList
                    data={savedJokes}
                    renderItem={renderSavedJoke}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            )}
        </View>
    );
};

export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01328A',
        padding: 20,
    },
    savedCard: {
        backgroundColor: '#0040AA',
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
    },
    questionText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    answerText: {
        color: '#ffd700',
        fontSize: 14,
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: '600',
    },

    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#002568',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 30,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#FFC100',
    },
    tabText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#000000',
    },
    emptyText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 50,
    },
    card: {
        backgroundColor: '#002568',
        borderRadius: 20,
        paddingVertical: 30,
        alignItems: 'center',
        marginVertical: 10,
    },
    emoji: {
        fontSize: 36,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '600',
    },
});
