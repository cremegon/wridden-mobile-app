import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Parent");
    }, 3000);
  }, []);
  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;
