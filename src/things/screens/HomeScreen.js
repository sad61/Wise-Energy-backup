import * as React from "react";
import { BottomNavigation, Text, Appbar, useTheme } from "react-native-paper";
import {
  SafeAreaView,
  View,
  NabigationContainer,
  StyleSheet,
} from "react-native";
import BottomNavigator from "../navigator/BottomNavigator";
import HomeBar from "../bars/HomeBar";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <HomeBar />
      </View>
      <BottomNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default HomeScreen;
