import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const SignInButton = ({ mode, radius, width }) => {
  const navigation = useNavigation();

  const navigateSignUp = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <Button
        mode={mode ? mode : "outlined"}
        onPress={navigateSignUp}
        style={{ width: width || "auto" }}
      >
        Sign in
      </Button>
    </SafeAreaView>
  );
};

export default SignInButton;
