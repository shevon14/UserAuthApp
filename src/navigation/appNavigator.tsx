import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import LoginScreen from "../screens/loginScreen";
import SignupScreen from "../screens/signupScreen";

// available navigation routes
export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

// Props passed to AppNavigator to determine auth state
type AppNavigatorProps = {
  isLoggedIn: boolean;
};

const Stack = createNativeStackNavigator();

// AppNavigator handles navigation flow based on authentication state.
// If user is logged in, they see Home. Otherwise, Login and Signup.
const AppNavigator = ({ isLoggedIn }: AppNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerBackVisible: false, title: "Account Details", headerTitleAlign: 'center', }}
          />
        ) : (
          <>
            <Stack.Screen
              name="LogIn"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
