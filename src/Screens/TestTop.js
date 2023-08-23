import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArcGraph from "../Components/ArcGraph";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TestTop = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ArcGraph />
        <Text>TestTop</Text>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestTop;
