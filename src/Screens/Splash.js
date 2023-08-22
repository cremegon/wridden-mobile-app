import { View, Text, SafeAreaView, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 500);
  });

  const inset = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: inset.top,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/thunk.png")}
        style={{ width: 170, height: 170 }}
      />
    </SafeAreaView>
  );
};

export default Splash;
