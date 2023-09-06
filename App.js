import { StyleSheet, Keyboard, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import LoginScreen from "./src/Screens/Login";
import Main from "./src/Main";
import SettingsPage from "./src/Screens/Settings";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from "./src/Screens/SignUp";
import ResetPass from "./src/Screens/ResetPass";
import DrawingCharacter2 from "./src/Components/DrawCharacter2";
import { useEffect } from "react";
import DatabaseContext from "./src/Components/Context/DatabaseContext";
import TestTop from "./src/Screens/TestTop";
import db from "./src/Helpers/Database";
import {
  UserContext,
  UserProvider,
} from "./src/Components/Context/UserContext";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Drawer.Screen
          name="Settings"
          component={SettingsPage}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const App = () => {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists stories (id integer primary key autoincrement, title text, user_id integer references users(id) on delete cascade);" +
          "create table if not exists characters (id integer primary key autoincrement, name text, image_uri text, story_id integer references stories(id) on delete cascade, user_id integer references users(id) on delete cascade, age text, gender text, physicalAttributes text, emotionalAttributes text, likes text, dislikes text);" +
          "create table if not exists sections (id integer primary key autoincrement, name text, body text, story_id integer references stories(id) on delete cascade);",
        null,
        (tx, { rows }) => console.log("Succesfully initialized tables"),
        (tx, error) => console.log("Error creating tables .... ", error)
      );
    });
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "AlegreyaSans-ExtraBold": require("./assets/fonts/AlegreyaSans-ExtraBold.ttf"),
    "AlegreyaSans-ExtraBoldItalic": require("./assets/fonts/AlegreyaSans-ExtraBoldItalic.ttf"),
    "AlegreyaSans-Bold": require("./assets/fonts/AlegreyaSans-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <DatabaseContext.Provider value={db}>
      <UserProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Sign Up"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Draw Character"
              component={DrawingCharacter2}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Test Top"
              component={TestTop}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Reset Pass"
              component={ResetPass}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="MainApp"
              component={MainApp}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </DatabaseContext.Provider>
  );
};

export default App;
