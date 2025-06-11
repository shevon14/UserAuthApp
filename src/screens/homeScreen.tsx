import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/authContext";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/customButton";

const HomeScreen = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Ionicons name="person-circle" size={20} color={COLORS.primary} />
          <Text style={styles.text}>{`Name: ${user?.name}`}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail" size={20} color={COLORS.primary} />
          <Text style={styles.text}>{`Email: ${user?.email}`}</Text>
        </View>
      </View>
      <CustomButton title="Log Out" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default HomeScreen;
