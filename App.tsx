import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import GameSetupScreen from "./src/screens/GameSetupScreen";
import AboutScreen from "./src/screens/AboutScreen";
import {TouchableOpacity, Image} from "react-native";
import FishingJokesScreen from "./src/screens/FishingJokesScreen";
import JokeCardScreen from "./src/screens/JokeCardScreen";
import CreateJokeScreen from "./src/screens/CreateJokeScreen";
import SavedScreen from "./src/screens/SavedScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ResultsScreen from "./src/screens/ResultsScreen";

const Stack = createStackNavigator();

const leftBack = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{marginLeft: 12}}>
            <Image source={require('./src/assets/img/LeftAccessory.png')} />
        </TouchableOpacity>
        )
}

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#F5751A', height: 100 },
                        headerTintColor: 'white',
                        headerLeft: leftBack,
                        headerShadowVisible: false,
                    }}>
                        {/*<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerLeft: ()=>{}}} />
                        <Stack.Screen name="GameSetupScreen" component={GameSetupScreen} options={{ }} />
                        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ }} />
                        <Stack.Screen name="FishingJokesScreen" component={FishingJokesScreen} options={{ }} />
                        <Stack.Screen name="JokeCardScreen" component={JokeCardScreen} options={{ }} />
                        <Stack.Screen name="CreateJokeScreen" component={CreateJokeScreen} options={{ }} />
                        <Stack.Screen name="SavedScreen" component={SavedScreen} options={{ }} />

                        <Stack.Screen name="Quiz" component={QuizScreen} />
                        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
