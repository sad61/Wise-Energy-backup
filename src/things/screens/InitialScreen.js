import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Appbar, useTheme, Text } from "react-native-paper";
import GeneralPurposeB from "../components/buttons/GeneralPurposeButton";

const InitialScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.main, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.EnergyMain}>
        <Image
          style={styles.energySaverImage}
          source={require("../../assets/image.png")}
        />
      </View>
      <View style={styles.homeMenu}>
        <View style={styles.texts}>
          <Text style={styles.mainText}>Hello</Text>
          <Text style={styles.secText}>Welcome to EnergySaver, where</Text>
          <Text style={styles.otherText}>you manage your energy usage</Text>
        </View>
        <View style={styles.buttonCol}>
          <View style={styles.loginB}>
            <GeneralPurposeB
              title="Login"
              navigate="Login"
              mode="contained"
              width={250}
            ></GeneralPurposeB>
          </View>
          <View style={styles.signUpB}>
            <GeneralPurposeB
              title="Sign up"
              navigate="SignUp"
              mode="outlined"
              width={250}
            ></GeneralPurposeB>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  EnergyMain: {
    flex: 1,
  },
  homeMenu: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  energySaverImage: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  texts: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    marginTop: -30,
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
  secText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  otherText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  buttonCol: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: 125,
  },
});

export default InitialScreen;
