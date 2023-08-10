import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import db from "../Helpers/Database";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MdFace } from "react-icons/md";

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  /*function testDatabase() {
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
  }*/

  return (
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
          onPress={() => navigation.navigate("Draw Character")}
        >
          {" "}
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
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
