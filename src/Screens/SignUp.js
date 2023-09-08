import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
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
    <ImageBackground
      source={require("../assets/splash_bg.png")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: null,
        width: null,
      }}
      resizeMode="cover"
    >
      <View>
        <Text style={[styles.title]}>Wridden</Text>
        <TextInput
          style={styles.inputbox}
          placeholder="Enter email"
          textAlign="left"
          value={email}
          onChangeText={(val) => setEmail(val)}
          placeholderTextColor={"lightgrey"}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter username"
          textAlign="left"
          value={name}
          onChangeText={(val) => setName(val)}
          placeholderTextColor={"lightgrey"}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter password"
          textAlign="left"
          value={pass}
          secureTextEntry={true}
          onChangeText={(val) => setPass(val)}
          placeholderTextColor={"lightgrey"}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Confirm password"
          textAlign="left"
          value={pass2}
          secureTextEntry={true}
          onChangeText={(val) => setPass2(val)}
          placeholderTextColor={"lightgrey"}
        />

        <View style={{ marginVertical: 20 }}>
          <Pressable onPress={() => handleSubmit()}>
            <Text style={styles.login_button}>Create Account</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.signup_container}>
        <Text style={{ color: "black", fontFamily: "Nunito-Bold" }}>
          Already have an account?
        </Text>
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Login
        </Text>
      </View>
    </ImageBackground>
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
    borderColor: "grey",
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  login_button: {
    alignSelf: "center",
    backgroundColor: "rgba(253, 148, 24, 1)",
    width: 300,
    height: 45,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 30,
    fontSize: 20,
    fontFamily: "Nunito-ExtraBold",
    color: "floralwhite",
    elevation: 3,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#3f2b2b",
  },
  signup_container: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  signup: {
    fontFamily: "Nunito-ExtraBold",
    color: "#fd9418",
  },
});

export default SignUp;
