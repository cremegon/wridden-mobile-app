import { ImageBackground, Pressable, TextInput } from "react-native";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DismissKeyboard from "../Components/DismissKeyboard";
import { UserContext } from "../Components/Context/UserContext";
import DatabaseContext from "../Components/Context/DatabaseContext";
import { useFonts } from "expo-font";
import BrandButton from "../Components/BrandButton";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const dbCtx = useContext(DatabaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    dbCtx.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE (email=? OR username=?) AND password=?",
        [email, email, password],
        (tx, { rows }) => {
          if (rows.length > 0) {
            console.log(rows._array);
            setUser({
              id: rows._array[0].id,
              username: rows._array[0].username,
            });
            navigation.navigate("MainApp");
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

          <View style={{ marginVertical: 20 }}>
            <Pressable onPress={handleSubmit}>
              <Text style={styles.login_button}>Login</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.signup_container}>
          <Text style={{ color: "black", fontFamily: "Nunito-Bold" }}>
            Dont have an account?
          </Text>
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
    elevation: 2,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#3f2b2b",
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
    marginTop: 15,
    alignSelf: "flex-end",
    color: "#fd9418",
    fontFamily: "Nunito-Bold",
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

export default LoginScreen;
