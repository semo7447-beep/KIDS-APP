import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LanguageProvider } from './src/context/LanguageContext';
import { ProgressProvider } from './src/context/ProgressContext';
import MapScreen from './src/screens/MapScreen';
import LettersScreen from './src/screens/LettersScreen';
import NumbersScreen from './src/screens/NumbersScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import MemoryGameScreen from './src/screens/MemoryGameScreen';
import PatternGameScreen from './src/screens/PatternGameScreen';
import OddOneOutScreen from './src/screens/OddOneOutScreen';
import DrawScreen from './src/screens/DrawScreen';
import AnimalWorldScreen from './src/screens/AnimalWorldScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <ProgressProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Letters" component={LettersScreen} />
                <Stack.Screen name="Numbers" component={NumbersScreen} />
                <Stack.Screen name="Colors" component={ColorsScreen} />
                <Stack.Screen name="Memory" component={MemoryGameScreen} />
                <Stack.Screen name="Pattern" component={PatternGameScreen} />
                <Stack.Screen name="OddOneOut" component={OddOneOutScreen} />
                <Stack.Screen name="Draw" component={DrawScreen} />
                <Stack.Screen name="AnimalWorld" component={AnimalWorldScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
          </ProgressProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
