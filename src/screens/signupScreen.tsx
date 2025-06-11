import React, { useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator";
import { Formik } from "formik";
import { SignupSchema } from "../validation/auth";

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

const SignUpScreen = () => {
  const { signup } = useContext(AuthContext); // Access signup function from context

  const navigation = useNavigation<SignUpScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Text */}
        <Text style={styles.title}>Join Us Today!</Text>
        <Text style={styles.text}>Sign up to get started</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              await signup(values.name, values.email, values.password);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <CustomInput
                  label="Enter Name"
                  icon="person-circle"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  error={touched.name && errors.name ? errors.name : undefined}
                />
                <CustomInput
                  label="Enter Email Address"
                  icon="mail"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  error={
                    touched.email && errors.email ? errors.email : undefined
                  }
                />
                <CustomInput
                  label="Enter Password"
                  icon="lock-closed"
                  isPassword
                  value={values.password}
                  onChangeText={handleChange("password")}
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />
                <CustomButton title="Sign Up" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>

        {/* Link to SignIn */}
        <View style={styles.row}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text style={styles.textClickable}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles for the SignUpScreen component
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textClickable: {
    marginLeft: 5,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
