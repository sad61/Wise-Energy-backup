import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import { useEquipment } from "../../context/EquipmentContext";

const CustomTouchable = ({
  primary,
  secondary,
  underlayColor,
  text,
  type,
  height,
  icon,
  error,
  style,
  darkStyle,
  lightStyle,
  onPressAction,
}) => {
  const theme = useTheme();
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  const { state, addEquipment } = useEquipment();

  // add a energy comsumption
  const handlePress = () => {
    addEquipment({ text, icon, type, darkStyle, lightStyle });
    console.log(state.equipments);
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      activeOpacity={0.5}
      underlayColor={underlayColor || "rgba(238, 238, 238, .5)"}
      style={[styles.container, { height: height || "auto" }, style]}
    >
      <View style={styles.content}>
        <View style={styles.icon}>
          <Icon source={icon} size={32} color={primary || "defaultColor"} />
        </View>
        <View style={{ marginLeft: 0.05 * screenWidth }}>
          <Text
            style={{
              fontSize: 22,
              color: error ? theme.colors.error : theme.colors.secondary,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionClickable: {},
  content: {
    height: 50,
    flexDirection: "row",
    marginLeft: "10%",
    alignItems: "center",
  },
  icon: {},
});

export default CustomTouchable;
