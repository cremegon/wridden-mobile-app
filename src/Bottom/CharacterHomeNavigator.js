import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterHomeAccess from "../Screens/CharacterHomeStack/CharacterHomeAccess";
import CharacterList from "../Screens/CharacterHomeStack/CharacterList";
import CharacterDraw from "../Screens/CharacterHomeStack/CharacterDraw";

const Stack = createNativeStackNavigator();

const CharacterHomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character Home Access"
        component={CharacterHomeAccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character List"
        component={CharacterList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character Draw"
        component={CharacterDraw}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CharacterHomeNavigator;
