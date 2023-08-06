import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterChoice from "./CharacterChoice";
import CharacterDraw from "./CharacterDraw";
import MainWriting from "../MainWritingStack/MainWriting";

const Stack = createNativeStackNavigator();

const CharacterSelect = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character Choice"
        component={CharacterChoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character Draw"
        component={CharacterDraw}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main Writing"
        component={MainWriting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CharacterSelect;
