import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
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
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter username"
          textAlign="left"
          onChangeText={(val) => setName(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Enter password"
          textAlign="left"
          secureTextEntry={true}
          onChangeText={(val) => setPass(val)}
        />

        <TextInput
          style={styles.inputbox}
          placeholder="Confirm password"
          textAlign="left"
          secureTextEntry={true}
          onChangeText={(val) => setPass2(val)}
        />

        <View style={styles.button}>
          <Button
            title="Create Account"
            onPress={() => navigation.navigate("Login")}
          />
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
