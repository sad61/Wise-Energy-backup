import { TextInput, Icon } from "react-native-paper";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { useState, useCallback } from "react";

const GeneralPurposeInput = ({
  mode,
  label,
  placeHolder,
  width,
  mLeft,
  mRight,
  height,
  icon,
  secure,
}) => {
  const [text, setText] = React.useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  const borderRadiusPercentage = 5;

  const borderRadiusValue = (dimensions.width * borderRadiusPercentage) / 100;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        left={<TextInput.Icon icon={icon} />}
        mode={mode ? mode : "outlined"}
        label={label}
        placeholder={placeHolder}
        outlineStyle={{ borderRadius: borderRadiusValue }}
        style={[
          styles.input,
          {
            width: width || "auto",
            marginLeft: mLeft || "auto",
            marginRight: mRight || "auto",
            height: 45 || "auto",
          },
        ]}
        secureTextEntry={secure || false}
        onLayout={onLayout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
});

export default GeneralPurposeInput;
