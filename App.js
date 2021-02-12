import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';


const MainNavigator = createSwitchNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
});

const SwitchScreen = createAppContainer(MainNavigator);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SwitchScreen />
    </NavigationContainer>
  );
}
