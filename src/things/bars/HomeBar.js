import * as React from "react";
import { Appbar } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";

const HomeBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Action
      style={{ position: "absolute", right: 0 }}
      icon="dots-vertical"
      onPress={() => {}}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    justifyContent: "center",
  },
});

export default HomeBar;
