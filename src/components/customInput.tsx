import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../theme/theme";

// type for the props
type Props = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
  error?: string;
};

// CustomInput component
const CustomInput: React.FC<Props> = ({
  value,
  onChangeText,
  label,
  icon,
  isPassword = false,
  error,
}) => {
  const [visible, setVisible] = useState(false); // state to manage visibility of password

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, {borderColor: error ? COLORS.danger : COLORS.secondary}]}>
        <View style={styles.inputLeftContainer}>
          <Ionicons
            name={icon}
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={label}
            secureTextEntry={isPassword && !visible}
            placeholderTextColor={COLORS.grey}
            style={styles.input}
          />
        </View>
        <View>
          {isPassword && (
            <TouchableOpacity onPress={toggleVisibility}>
              <Ionicons
                name={visible ? "eye" : "eye-off"}
                size={20}
                color={COLORS.grey}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  inputLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "70%",
    height: 48,
  },
  icon: {
    marginHorizontal: 8,
  },
  textError: {
    fontSize: SIZES.h3,
    color: COLORS.danger,
    marginBottom: 10,
    fontWeight: "500",
  },
});

export default CustomInput;
