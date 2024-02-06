import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text, useTheme, Avatar } from "react-native-paper";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const EquipmentContainer = ({
  primary,
  secondary,
  tertiary,
  underlayColor,
  text,
  height,
  icon,
  error,
  style,
  onPressAction,
}) => {
  const theme = useTheme();

  const handlePress = () => {
    if (onPressAction && typeof onPressAction === "function") {
      onPressAction();
      return;
    }
    console.log("pressed budget");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress;
      }}
      activeOpacity={0.8}
    >
      <View style={styles.mainFrame}>
        <View style={styles.avatarFrame}>
          <Avatar.Icon
            icon={icon}
            color={primary}
            size={72}
            style={[styles.avatarIcon, { backgroundColor: secondary }]}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainFrame: {
    flexDirection: "row",
  },
  avatarFrame: {},
  info: {
    justifyContent: "center",
  },
  avatarIcon: {
    marginLeft: screenWidth * 0.02,
  },
  text: {
    color: "white",
    marginLeft: screenWidth * 0.02,
    fontSize: 18,
  },
});

export default EquipmentContainer;
