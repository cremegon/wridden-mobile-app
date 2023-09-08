import { View, Text, SafeAreaView, Button, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Animated } from "react-native";
import { Easing } from "react-native-reanimated";

const Splash = ({ navigation }) => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translation, {
      toValue: 170,
      useNativeDriver: true,
      easing: Easing.bounce,
      duration: 1000,
    }).start();

    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  });

  return (
    <Animated.View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: -300,
        flex: 1,
      }}
    >
      <Animated.Image
        source={require("../assets/stories/main_logo.png")}
        style={{
          width: 150,
          height: 150,
          transform: [{ translateY: translation }],
        }}
      />
    </Animated.View>
  );
};

export default Splash;
