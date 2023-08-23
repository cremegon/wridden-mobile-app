import { StyleSheet } from "react-native";
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
import Test from "./src/Components/Card";
import Card from "./src/Components/Card";
import DrawCharacter from "./src/Components/DrawCharacter";
import DrawingCharacter2 from "./src/Components/DrawCharacter2";
import { useEffect } from "react";
import openDatabase from "./src/Helpers/Database";
import TestTop from "./src/Screens/TestTop";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
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
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const db = openDatabase();

const App = () => {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  return (
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
          options={{ headerShown: true }}
        />
        <RootStack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
