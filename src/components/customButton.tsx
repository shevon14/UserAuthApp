import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES } from "../theme/theme";

// prop types for the custom button
type CustomButtonProps = {
  onPress: () => void;
  title: string;
};

// CustomButton component
const CustomButton: React.FC<CustomButtonProps> = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
      backgroundColor: COLORS.primary,
      paddingVertical: 18,
      borderRadius: 10,
      alignItems: "center",
      marginVertical: 20,
    },
    buttonText: {
      color: COLORS.white,
      fontSize: SIZES.h3,
      fontWeight: "bold",
    },
});

export default CustomButton;
