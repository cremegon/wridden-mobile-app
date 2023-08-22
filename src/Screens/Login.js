import { TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";
import { View, Text, Button, StyleSheet } from "react-native";
import db from "../Helpers/Database";
import { SafeAreaView } from "react-native-safe-area-context";
import { MdFace } from "react-icons/md";
import { Keyboard } from "react-native";
import DismissKeyboard from "../Components/DismissKeyboard";

//const db = SQLite.openDatabase("mydatabase.db");

const LoginScreen = ({ navigation }) => {
  /*const [item, setItem] = useState("");

  const inset = useSafeAreaInsets();
  useEffect(() => {
    // Create a table if it doesn't exist
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);"
      );
    });
  }, []);

  // Insert data into the 'items' table
  const insertItem = (name) => {
    console.log(name);
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO items (name) VALUES (?)", [name]);
    });
  };

  const debugData = () =>
    db.transaction(
      (tx) => {
        tx.executeSql("SELECT * FROM items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      (error) => console.error(error),
      () => console.log("done")
    );*/
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Wridden
          </Text>
          <TextInput
            style={styles.inputbox}
            placeholder="Username or email address"
            textAlign="left"
            onChangeText={(val) => setId(val)}
          />

          <TextInput
            style={styles.inputbox}
            placeholder="Password"
            textAlign="left"
            onChangeText={(val) => setPass(val)}
            secureTextEntry={true}
          />

          <Text
            style={styles.forgotpass}
            onPress={() => navigation.navigate("Reset Pass")}
          >
            Forgot Password?
          </Text>

          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => navigation.navigate("MainApp")}
            />
          </View>
        </View>

        <View style={styles.signup_container}>
          <Text>Dont have an account?</Text>
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("Test Top")}
          >
            {" "}
            Sign Up
          </Text>
        </View>
      </SafeAreaView>
    </DismissKeyboard>

    /*<View style={{ paddingTop: inset.top }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Login Screen</Text>
      <TextInput onChangeText={(text) => setItem(text)}></TextInput>
      <Button title="Insert" onPress={() => insertItem(item)} />
      <Button title="Print" onPress={() => debugData()} />
    </View>*/
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 300,
    paddingTop: 20,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "grey",
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  forgotpass: {
    fontWeight: "bold",
    marginTop: 15,
    alignSelf: "flex-end",
    color: "royalblue",
  },
  signup_container: {
    flexDirection: "row",
  },
  signup: {
    fontWeight: "bold",
    color: "royalblue",
  },
});

export default LoginScreen;
