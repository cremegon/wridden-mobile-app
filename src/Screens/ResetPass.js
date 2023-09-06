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
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPass = ({ navigation }) => {
  const [reset, setReset] = useState("");
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
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.content}>
          Enter your registered email address to recieve a reset link in your
          Inbox
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.inputbox}
          placeholder="E-mail"
          textAlign="left"
          onChangeText={(val) => setReset(val)}
          placeholderTextColor={"lightgrey"}
        />
        <View style={styles.button}>
          <View style={{ marginVertical: 20 }}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login_button}>Reset Password</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Nunito-ExtraBold",
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 50,
    fontFamily: "OpenSans-Regular",
  },
});

export default ResetPass;
