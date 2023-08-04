import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CharacterHome = () => {
  return (
    <View>
      <Text>Character Home</Text>
    </View>
  );
};

export default CharacterHome;
