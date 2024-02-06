import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, useTheme } from "react-native-paper";
import ResetButton from "../components/buttons/ResetButton";
import { useEquipment } from "../context/EquipmentContext";
import EquipmentContainer from "../containers/EquipmentContainer";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const MainScreen = () => {
  const { state } = useEquipment();
  const theme = useTheme();

  return (
    <SafeAreaView>
      <View style={styles.containerFrame}>
        <ScrollView>
          {state.equipments.map((item, index) => (
            <View
              key={index}
              style={[
                styles.container,
                { backgroundColor: item.darkStyle.backgroundColor },
              ]}
            >
              <EquipmentContainer
                primary={theme.colors.primary}
                secondary={theme.colors.tertiary}
                icon={item.icon}
                text={item.text}
              />
            </View>
          ))}
          <ResetButton />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerFrame: {
    alignItems: "center",
  },
  container: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.9,
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: screenHeight * 0.01,

    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
});

export default MainScreen;
