import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const GeneralPurposeB = ({ title, navigate, mode, width, icon }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(navigate);
  };

  return (
    <SafeAreaView>
      <Button
        mode={mode}
        onPress={navigateToScreen}
        style={{ width: width || "auto" }}
      >
        {title}
      </Button>
    </SafeAreaView>
  );
};

export default GeneralPurposeB;
