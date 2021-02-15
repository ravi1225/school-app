import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';


const MainNavigator = createSwitchNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Home: { screen: Home },
});

const SwitchScreen = createAppContainer(MainNavigator);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SwitchScreen />
      </ScrollView>
    </NavigationContainer>
  );
}
