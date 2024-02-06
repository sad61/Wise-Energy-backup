import React, { useState, useCallback } from "react";
import { Text, useTheme } from "react-native-paper";
import {
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import GeneralPurposeInput from "../components/inputs/GeneralPurposeInput";
import { DatePickerInput } from "react-native-paper-dates";
import SignInButton from "../components/buttons/SignInButton";

const SignUpScreen = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  const theme = useTheme();
  const percentageWidth = 74;
  const widthPercentage = (dimensions.width * percentageWidth) / 100;

  return (
    <SafeAreaView
      onLayout={onLayout}
      style={[styles.main, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.textView}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.mainFrame}>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <GeneralPurposeInput
                mode="outlined"
                placeHolder="Nome completo"
                width={widthPercentage}
                icon="account"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <GeneralPurposeInput
                mode="outlined"
                placeHolder="Senha"
                width={widthPercentage}
                icon="lock"
                style={styles.input}
                secure={true}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <GeneralPurposeInput
                mode="outlined"
                placeHolder="Email"
                width={widthPercentage}
                icon="email"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Número</Text>
              <GeneralPurposeInput
                mode="outlined"
                placeHolder="Número"
                width={widthPercentage}
                icon="phone"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Endereço</Text>
              <GeneralPurposeInput
                mode="outlined"
                placeHolder="Endereço"
                width={widthPercentage}
                icon="map-marker"
                style={styles.input}
              />
            </View>

            <View style={styles.signInB}>
              <SignInButton
                mode="contained"
                width={widthPercentage}
              ></SignInButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textView: {},
  main: {
    flex: 1,
    flexDirection: "column",
  },
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
  input: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 15,
    color: "#434343",
  },
  inputContainer: {
    marginBottom: 25,
  },
  mainFrame: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
  signInB: {
    marginTop: 15,
  },
});

export default SignUpScreen;
