import * as Yup from "yup";
import { emailRegex } from "../utils/regex";

// Validation schema for the login form
export const LoginSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Invalid Format').required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Validation schema for the sign up form
export const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().matches(emailRegex, 'Invalid Format').required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});