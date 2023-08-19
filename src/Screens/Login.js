import { View, Text, Button, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mydatabase.db");

const LoginScreen = ({ navigation }) => {
  const [item, setItem] = useState("");

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
    );
  return (
    <View style={{ paddingTop: inset.top }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Login Screen</Text>
      <TextInput onChangeText={(text) => setItem(text)}></TextInput>
      <Button title="Insert" onPress={() => insertItem(item)} />
      <Button title="Print" onPress={() => debugData()} />
    </View>
  );
};

export default LoginScreen;
