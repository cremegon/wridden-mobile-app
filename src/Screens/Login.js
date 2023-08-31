import { ImageBackground, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DismissKeyboard from "../Components/DismissKeyboard";
import { UserContext } from "../Components/Context/UserContext";
import DatabaseContext from "../Components/Context/DatabaseContext";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const db = useContext(DatabaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE (email=? OR username=?) AND password=?",
        [email, email, password],
        (tx, { rows }) => {
          console.log(rows);
          if (rows.length > 0) {
            console.log(rows);
            // setUser({ id: rows[0].id, username: rows[0].username });
            //navigation.navigate("MainApp");
          } else {
            console.log("Incorrect Username or Password");
          }
        },
        (error) => {
          console.log("Error selecting data", error);
        }
      );
    });
  }

  return (
    <DismissKeyboard>
      <ImageBackground
        source={require("../assets/SPLASH_BACKGROUND.jpg")}
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
            value={email}
            onChangeText={(val) => setEmail(val)}
            placeholderTextColor={"lightgrey"}
          />

          <TextInput
            style={styles.inputbox}
            placeholder="Password"
            textAlign="left"
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={true}
            placeholderTextColor={"lightgrey"}
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
          <Text style={{ color: "black" }}>Dont have an account?</Text>
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("Sign Up")}
          >
            {" "}
            Sign Up
          </Text>
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
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
  forgotpass: {
    fontWeight: "bold",
    marginTop: 15,
    alignSelf: "flex-end",
    color: "royalblue",
  },
  signup_container: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  signup: {
    fontWeight: "bold",
    color: "royalblue",
  },
});

export default LoginScreen;
