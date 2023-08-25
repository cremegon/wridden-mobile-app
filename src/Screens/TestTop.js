import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArcGraph from "../Components/ArcGraph";

const TestTop = () => {
  return (
    <SafeAreaView>
      <ArcGraph />
      <Text>TestTop</Text>
    </SafeAreaView>
  );
};

export default TestTop;
