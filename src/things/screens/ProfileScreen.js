import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Icon, Avatar, Text, IconButton, useTheme } from "react-native-paper";
import CustomTouchable from "../components/buttons/CustomTouchable";

const AppNavigator = () => {
  const underlayColor = "rgba(238, 238, 238, .5)";
  const theme = useTheme();
  const userJson = require("../../assets/json/user.json");
  const profilePic = require("../../assets/profile.png");

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.profileContainer}>
        <View style={styles.mainInfo}>
          <View style={styles.avatarImage}>
            <Avatar.Image size={90} source={profilePic} />
          </View>
          <View style={styles.avatarName}>
            <Text style={[styles.nameText, { color: theme.colors.primary }]}>
              {userJson.name}
            </Text>
            <IconButton
              icon="pencil"
              size={20}
              iconColor={theme.colors.primary}
              onPress={() => console.log("pressed")}
              style={{ marginTop: -10 }}
            />
          </View>
        </View>
        <View style={styles.secInfo}>
          <View style={styles.email}>
            <Icon source="email" size={24} color={theme.colors.primary} />
            <Text
              style={{
                marginLeft: 18,
                fontSize: 16,
                color: theme.colors.secondary,
              }}
            >
              {userJson.email}
            </Text>
          </View>
          <View style={styles.phone}>
            <Icon source="phone" size={24} color={theme.colors.primary} />
            <Text
              style={{
                marginLeft: 18,
                fontSize: 16,
                color: theme.colors.secondary,
              }}
            >
              {userJson.phone}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.budgetFrame}>
        <TouchableHighlight
          style={styles.budget}
          onPress={() => console.log("pressed budget")}
          activeOpacity={0.5}
          underlayColor={underlayColor}
        >
          <View style={styles.budget}>
            <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
              {userJson.budget}kWh
            </Text>
            <Text
              variant="titleSmall"
              style={{ color: theme.colors.secondary }}
            >
              Budget
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.budget, styles.budgetWithBorder]}
          onPress={() => console.log("pressed equipments")}
          activeOpacity={0.5}
          underlayColor={underlayColor}
        >
          <View style={styles.budget}>
            <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
              {userJson.equipments.length || 0}
            </Text>
            <Text
              variant="titleSmall"
              style={{ color: theme.colors.secondary }}
            >
              Equipments
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.settingsFrame}>
        <CustomTouchable
          primary={theme.colors.primary}
          secondary={theme.colors.secondary}
          underlayColor={underlayColor}
          text="Settings"
          icon="cog"
          height={75}
        />
        <CustomTouchable
          primary={theme.colors.primary}
          secondary={theme.colors.secondary}
          underlayColor={underlayColor}
          text="Settings"
          icon="cog"
          height={75}
        />
        <CustomTouchable
          primary={theme.colors.primary}
          secondary={theme.colors.secondary}
          underlayColor={underlayColor}
          text="Settings"
          icon="cog"
          height={75}
        />
        <CustomTouchable
          primary={theme.colors.primary}
          secondary={theme.colors.secondary}
          underlayColor={underlayColor}
          text="Settings"
          icon="cog"
          height={75}
        />
        <CustomTouchable
          primary={theme.colors.error}
          secondary={theme.colors.error}
          underlayColor={underlayColor}
          text="Logout"
          icon="logout"
          error={true}
          height={75}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  profileContainer: {
    padding: 16,
    borderRadius: 8,
    height: "30%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mainInfo: {
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
  },
  avatarName: {
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
  },
  nameText: {
    fontSize: 18,
  },
  secInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "5%",
    marginRight: "5%",
  },
  email: {
    flexDirection: "row",
  },
  phone: {
    flexDirection: "row",
  },

  budgetFrame: {
    flexDirection: "row",
    height: "10%",
  },

  budget: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  budgetWithBorder: {},

  settingsFrame: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  optionClickable: {},
  optionContent: {
    height: 50,
    flexDirection: "row",
    marginLeft: "10%",
    alignItems: "center",
  },
  optionIcon: {},
});

export default AppNavigator;
