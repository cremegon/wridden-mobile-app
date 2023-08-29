import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import DatabaseContext from "../Components/Context/DatabaseContext";
import { useContext } from "react";

const SignUp = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const db = useContext(DatabaseContext);

  function handleSubmit() {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
        [email, name, pass],
        (tx, result) => {
          console.log("Insert successful");
          navigation.navigate("Login");
        },
        (error) => {
          console.log("Error inserting data:", error);
        }
      );
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Wridden
        </Text>
        <TextInput
          style={styles.inputbox}
          placeholder="Enter email"
          textAlign="left"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter username"
          textAlign="left"
          value={name}
          onChangeText={(val) => setName(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter password"
          textAlign="left"
          value={pass}
          secureTextEntry={true}
          onChangeText={(val) => setPass(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Confirm password"
          textAlign="left"
          value={pass2}
          secureTextEntry={true}
          onChangeText={(val) => setPass2(val)}
        />

        <View style={styles.button}>
          <Button title="Create Account" onPress={() => handleSubmit()} />
        </View>
      </View>

      <View style={styles.signup_container}>
        <Text>Already have an account?</Text>
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    textAlign: "left",
    marginTop: -20,
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
  signup_container: {
    flexDirection: "row",
    marginTop: 50,
  },
  signup: {
    fontWeight: "bold",
    color: "royalblue",
  },
});

export default SignUp;
