import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LanguageProvider } from './src/context/LanguageContext';
import { ProgressProvider } from './src/context/ProgressContext';
import { CharacterProvider } from './src/context/CharacterContext';
import MapScreen from './src/screens/MapScreen';
import LettersScreen from './src/screens/LettersScreen';
import NumbersScreen from './src/screens/NumbersScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import MemoryGameScreen from './src/screens/MemoryGameScreen';
import PatternGameScreen from './src/screens/PatternGameScreen';
import OddOneOutScreen from './src/screens/OddOneOutScreen';
import DrawScreen from './src/screens/DrawScreen';
import AnimalWorldScreen from './src/screens/AnimalWorldScreen';
import WhatsMissingScreen from './src/screens/WhatsMissingScreen';
import PredictScreen from './src/screens/PredictScreen';
import RobotProgramScreen from './src/screens/RobotProgramScreen';
import SpeedChallengeScreen from './src/screens/SpeedChallengeScreen';
import SecretRoomScreen from './src/screens/SecretRoomScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <ProgressProvider>
          <CharacterProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen} />
                <Stack.Screen name="Letters" component={LettersScreen} />
                <Stack.Screen name="Numbers" component={NumbersScreen} />
                <Stack.Screen name="Colors" component={ColorsScreen} />
                <Stack.Screen name="Memory" component={MemoryGameScreen} />
                <Stack.Screen name="Pattern" component={PatternGameScreen} />
                <Stack.Screen name="OddOneOut" component={OddOneOutScreen} />
                <Stack.Screen name="Draw" component={DrawScreen} />
                <Stack.Screen name="AnimalWorld" component={AnimalWorldScreen} />
                <Stack.Screen name="WhatsMissing" component={WhatsMissingScreen} />
                <Stack.Screen name="Predict" component={PredictScreen} />
                <Stack.Screen name="Robot" component={RobotProgramScreen} />
                <Stack.Screen name="Speed" component={SpeedChallengeScreen} />
                <Stack.Screen name="SecretRoom" component={SecretRoomScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
          </CharacterProvider>
          </ProgressProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
