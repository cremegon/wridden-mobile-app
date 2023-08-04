import { View, Text, Button } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: inset.top }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Parent")} />
    </View>
  );
};

export default LoginScreen;
