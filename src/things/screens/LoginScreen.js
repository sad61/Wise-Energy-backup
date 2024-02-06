import React, { useState, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import GeneralPurposeInput from "../components/inputs/GeneralPurposeInput";
import { DatePickerInput } from "react-native-paper-dates";

const LoginScreen = () => {
  // tava escrevendo o sign up no login
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  console.log("refresh");

  const percentageWidth = 80;
  const widthPercentage = (dimensions.width * percentageWidth) / 100;

  return (
    <SafeAreaView
      onLayout={onLayout}
      style={{
        flex: 1,
        flexDirection: "column",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.EnergyMain}>
          <Image
            style={styles.energySaverImage}
            source={require("../../assets/image.png")} // a imagem não ta correta
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.inputs}>
          <GeneralPurposeInput
            mode="outlined"
            placeHolder="Nome completo"
            width={widthPercentage}
            style={styles.input}
          />
          <View style={styles.space} />
          <GeneralPurposeInput
            mode="outlined"
            placeHolder="Email"
            width={widthPercentage}
            style={styles.input}
          />
          <View style={styles.space} />
          <GeneralPurposeInput
            mode="outlined"
            placeHolder="Número"
            width={widthPercentage}
            style={styles.input}
          />
          <View style={styles.space} />
          <GeneralPurposeInput
            mode="outlined"
            placeHolder="Endereço"
            width={widthPercentage}
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textView: {},
  energySaverImage: {
    top: 0,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 36,
    justifyContent: "center",
    padding: 40,
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
  },
  input: {},
  space: {
    flex: 0.05,
    paddingBottom: "5%",
  },
});

export default LoginScreen;
