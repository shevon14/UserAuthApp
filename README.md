# User Authentication App

A React Native authentication app built with TypeScript, Context API, and Formik/Yup. The app allows users to sign up, log in, and log out with proper form validation and authentication state persisted using AsyncStorage.

---

## ✨ Features

- 🔐 **Authentication Flow** using React Context API
- 📝 **Login / Signup Forms** with Formik + Yup validation
- 🔄 **Persistent Auth State** using AsyncStorage
- 📱 **React Navigation** for screen transitions
- 👁 **Password Visibility Toggle** in input fields
- 🔳 **Modular and reusable components** for input and buttons
- ✅ **Reusable Regex, Validation Logic & Theme** in dedicated files

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shevon14/userAuthApp.git
cd userAuthApp
```

### 2. Install dependencies

```bash
npm install

```

Or using yarn:


```bash
yarn install
```

### 3. Running the App (iOS and Android)

```bash
npm run ios
```
```bash
npm run android
```

## 🧱 Tech Stack

- React Native (via Expo)
- TypeScript
- React Navigation
- Formik for form handling
- Yup for validation schemas
- AsyncStorage for persistent auth state
- React Context API for global auth logic

## ✅ Validation

Validation is implemented using Formik + Yup, with schemas defined in validation/auth.ts & Email format is validated using a regex defined in utils/regex.ts.

- All fields are required
- Email must be in valid format
- Password must be at least 6 characters

 ##  🔒 Authentication Logic

- Signup, login and logout are handled in AuthContext
- Authentication state is stored using AsyncStorage
- Auth state is restored on app load to keep the user logged in
- Logout clears the state and redirects to the login screen

 ## 🧪 Bonus Features
 
👁 Toggle password visibility

## 📬 Contact

For any issues or suggestions, feel free to open an issue or reach out via email: shevonsoyza96@gmail.com








