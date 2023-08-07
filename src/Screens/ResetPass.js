import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPass = ({ navigation }) => {
  const [reset, setReset] = useState("");
  return (
    <SafeAreaView style={styles.container}>
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
        />
        <View style={styles.button}>
          <Button
            title="Reset Password"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginTop: -50,
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    marginTop: 10,
    fontSize: 17,
    textAlign: "center",
    marginHorizontal: 50,
  },
});

export default ResetPass;
