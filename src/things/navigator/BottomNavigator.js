import React from "react";
import {
  BottomNavigation,
  Text,
  Appbar,
  NavigationContainer,
} from "react-native-paper";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterEquipmentScreen from "../screens/RegisterEquipmentScreen";
import MainScreen from "../screens/MainScreen";

const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "main",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "addEquipment", unfocusedIcon: "plus", focusedIcon: "plus-thick" },
    { key: "profile", title: "Recents", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: MainScreen,
    addEquipment: RegisterEquipmentScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ height: "6%" }}
    />
  );
};

export default BottomNavigator;
