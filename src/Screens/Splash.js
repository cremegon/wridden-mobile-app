import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  });

  const inset = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ paddingTop: inset.top }}>
      <Text style={{ fontSize: 50 }}>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;
