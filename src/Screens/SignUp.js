import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: inset.top }}>
      <Text>Sign Up</Text>
    </View>
  );
};

export default SignUp;
