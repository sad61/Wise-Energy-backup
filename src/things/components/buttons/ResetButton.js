import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import { useEquipment } from "../../context/EquipmentContext";

const ResetButton = () => {
  const { resetEquipment } = useEquipment();

  return (
    <TouchableOpacity onPress={resetEquipment} activeOpacity={0.8}>
      <Button mode="contained" onPress={resetEquipment}>
        reset
      </Button>
    </TouchableOpacity>
  );
};

export default ResetButton;
