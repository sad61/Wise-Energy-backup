import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const LoginButton = () => {
  const navigation = useNavigation();

  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <Button mode="contained" onPress={navigateLogin} style={{ width: 250 }}>
        Login
      </Button>
    </SafeAreaView>
  );
};

export default LoginButton;
