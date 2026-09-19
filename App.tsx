import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LanguageProvider } from './src/context/LanguageContext';
import { CharacterProvider } from './src/context/CharacterContext';
import HomeScreen from './src/screens/HomeScreen';
import CharacterSelectScreen from './src/screens/CharacterSelectScreen';
import DetectiveScreen from './src/screens/DetectiveScreen';
import PredictScreen from './src/screens/PredictScreen';
import BuildWorldScreen from './src/screens/BuildWorldScreen';
import RobotScreen from './src/screens/RobotScreen';
import SecretRoomScreen from './src/screens/SecretRoomScreen';
import RescueScreen from './src/screens/RescueScreen';
import WhatsMissingScreen from './src/screens/WhatsMissingScreen';
import SpeedScreen from './src/screens/SpeedScreen';
import DrawScreen from './src/screens/DrawScreen';
import CoopScreen from './src/screens/CoopScreen';
import KingScreen from './src/screens/KingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <CharacterProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen} />
                <Stack.Screen name="Detective" component={DetectiveScreen} />
                <Stack.Screen name="Predict" component={PredictScreen} />
                <Stack.Screen name="BuildWorld" component={BuildWorldScreen} />
                <Stack.Screen name="Robot" component={RobotScreen} />
                <Stack.Screen name="SecretRoom" component={SecretRoomScreen} />
                <Stack.Screen name="Rescue" component={RescueScreen} />
                <Stack.Screen name="WhatsMissing" component={WhatsMissingScreen} />
                <Stack.Screen name="Speed" component={SpeedScreen} />
                <Stack.Screen name="Draw" component={DrawScreen} />
                <Stack.Screen name="Coop" component={CoopScreen} />
                <Stack.Screen name="King" component={KingScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
          </CharacterProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
