import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/authContext";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { LoginSchema } from "../validation/auth";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LogIn"
>;

const LoginScreen = () => {
  const { login } = useContext(AuthContext); // Access login function from context

  // State for main error message
  const [error, setError] = React.useState("");

  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Text */}
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.text}>Sign in to continue</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            try {
              await login(values.email, values.password);
            } catch (err: any) {
              setError(err.message);
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <CustomInput
                label="Enter Email Address"
                icon="mail"
                value={values.email}
                onChangeText={(val) => {
                  handleChange("email")(val);
                  setError("");
                }}
                error={touched.email && errors.email ? errors.email : undefined}
              />
              <CustomInput
                label="Enter Password"
                icon="lock-closed"
                isPassword
                value={values.password}
                onChangeText={(val) => {
                  handleChange("password")(val);
                  setError("");
                }}
                error={
                  touched.password && errors.password
                    ? errors.password
                    : undefined
                }
              />
              {error && <Text style={styles.textError}>{error}</Text>}
              <CustomButton title="Log In" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>

      {/* Link to Signup */}
      <View style={styles.row}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.textClickable}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles for the LoginScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    marginTop: 50,
    fontSize: SIZES.h1,
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  text: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: "500",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 30,
  },
  textError: {
    fontSize: SIZES.h3,
    color: COLORS.danger,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textClickable: {
    marginLeft: 5,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});

export default LoginScreen;
