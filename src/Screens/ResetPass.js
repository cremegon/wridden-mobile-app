import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ResetPass = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: inset.top }}>
      <Text>Reset Pass</Text>
    </View>
  );
};

export default ResetPass;
