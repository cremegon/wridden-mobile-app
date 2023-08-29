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
import DrawingCharacter2 from "./src/Components/DrawCharacter2";
import { useContext, useEffect } from "react";
import DatabaseContext from "./src/Components/Context/DatabaseContext";
import TestTop from "./src/Screens/TestTop";
import db from "./src/Helpers/Database";
import {
  UserContext,
  UserProvider,
} from "./src/Components/Context/UserContext";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = ({ navigation }) => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      //redirect if the context is lost ....
      navigation.navigate("Login");
    }
  }, [user]);

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
        "create table if not exists users (id integer primary key autoincrement, email text, username text, password text);" +
          "create table if not exists stories (id integer primary key autoincrement, title text, user_id integer references users(id) on delete cascade);" +
          "create table if not exists characters (id integer primary key autoincrement, name text, image_uri text, story_id integer references stories(id) on delete cascade, user_id integer references users(id) on delete cascade);" +
          "create table if not exists sections (id integer primary key autoincrement, name text, body text, story_id integer references stories(id) on delete cascade);",
        null,
        (tx, { rows }) => console.log("Succesfully initialized tables"),
        (error) => console.log("Error creating tables .... ", error)
      );
    });
  }, []);

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
              options={{ headerShown: true }}
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
