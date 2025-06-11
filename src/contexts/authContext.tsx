import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// User type structure
type User = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
};

// shape of the Auth Context
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // Helper function to update AsyncStorage and state
  const saveUser = async (userData: User, loggedIn: boolean) => {
    const updatedUser = { ...userData, isLoggedIn: loggedIn };
    await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  // On app load, retrieve user from AsyncStorage (if any)
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadUser();
  }, []);

  // Signup function to create a new user
  const signup = async (name: string, email: string, password: string) => {
    const newUser: User = { name, email, password, isLoggedIn: true };
    await AsyncStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // Login function to authenticate the user
  const login = async (email: string, password: string) => {

    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) throw new Error("No user found.");
    
    const parsedUser: User = JSON.parse(storedUser);
    if (parsedUser.email !== email || parsedUser.password !== password)
      throw new Error("Incorrect credentials");
    
    saveUser(parsedUser, true);
  };

  // Logout function to clear login status
  const logout = async () => {
    if (!user) return;
    saveUser(user, false);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
