import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./src/contexts/authContext";
import AppNavigator from "./src/navigation/appNavigator";

const AppContent = () => {
  const {user } = useContext(AuthContext);

  return <AppNavigator isLoggedIn={user ? user.isLoggedIn : false} />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
