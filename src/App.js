import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  useTheme as useNavigationTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { EquipmentProvider } from "./things/context/EquipmentContext";
import { useTheme } from "react-native-paper";
import InitialScreen from "./things/screens/InitialScreen";
import SignUpScreen from "./things/screens/SignUpScreen";
import LoginScreen from "./things/screens/LoginScreen";
import ProfileScreen from "./things/screens/ProfileScreen";
import HomeScreen from "./things/screens/HomeScreen";

import { pt, registerTranslation } from "react-native-paper-dates";
registerTranslation("pt", pt);

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    tertiary: "#1C1B1F",
  },
};

const Stack = createStackNavigator();

StatusBar.setBarStyle("light-content");

export default function App() {
  const [text, setText] = useState("salve a");
  const theme = useTheme();

  const navigationTheme = useNavigationTheme();

  function changeText() {
    setText("mukk");
    return;
  }
  console.log(`${StatusBar.currentHeight}`);
  return (
    <EquipmentProvider>
      <PaperProvider theme={DarkTheme}>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen
              name="Initial"
              component={InitialScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </EquipmentProvider>
  );
}
