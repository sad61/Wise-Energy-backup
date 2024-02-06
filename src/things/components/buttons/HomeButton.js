import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HomeButton = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate("Initial");
  };

  return (
    <SafeAreaView>
      <Button mode="elevated" onPress={navigateHome}>
        Home
      </Button>
    </SafeAreaView>
  );
};

export default HomeButton;
