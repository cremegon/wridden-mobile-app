import { View, Text, Button } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import db from "../Helpers/Database";

const LoginScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();

  function testDatabase() {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS demo (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
    );
    `,
        (_, { rows: { _array } }) => console.log(_array)
      );
    });
  }

  return (
    <View style={{ paddingTop: inset.top }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Login Screen</Text>
      <Button title="Login" onPress={() => testDatabase()} />
    </View>
  );
};

export default LoginScreen;
