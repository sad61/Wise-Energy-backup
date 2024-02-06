import React, { useState } from "react";
import {
  BottomNavigation,
  Text,
  Appbar,
  useTheme,
  Searchbar,
} from "react-native-paper";
import {
  SafeAreaView,
  View,
  NabigationContainer,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import CustomTouchable from "../components/buttons/CustomTouchable";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const RegisterEquipmentScreen = () => {
  const equipments = require("../../assets/json/equipmentType.json");
  const theme = useTheme();
  const underlayColor = "rgba(238, 238, 238, .5)";

  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipments = equipments.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  return (
    <View style={styles.main}>
      <View style={styles.textFrame}>
        <Text style={styles.text}>Which device would you like to set up?</Text>
      </View>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{ width: 0.7 * screenWidth }}
        />
      </View>
      <View style={styles.equipmentsFrame}>
        <View style={{ backgroundColor: theme.colors.secondary }}>
          <Text
            style={{ marginLeft: 0.05 * screenWidth, color: theme.colors.p }}
          >
            ALL DEVICES
          </Text>
        </View>
        <View style={styles.equipments}>
          {filteredEquipments.map((item) => (
            <View key={item.type}>
              <CustomTouchable
                primary={theme.colors.primary}
                secondary={theme.colors.secondary}
                underlayColor={underlayColor}
                text={item.name}
                type={item.type}
                icon={item.icon}
                darkStyle={item.darkStyle}
                lightStyle={item.lightStyle}
                height={75}
                style={[styles.equipment]}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },

  text: {
    fontSize: 24,
    marginHorizontal: "10%",
  },
  searchBar: {
    marginVertical: 0.01 * screenHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  equipmentsFrame: {
    marginTop: screenWidth * 0.01,
  },
  equipments: {
    marginTop: screenWidth * 0.05,
  },
});
export default RegisterEquipmentScreen;
