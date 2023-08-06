import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterChoice from "./Choice";
import MainWriting from "../MainWriting";
import DrawCharacter from "../../Components/DrawCharacter";

const Stack = createNativeStackNavigator();

const NewStoryRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character Choice"
        component={CharacterChoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character Draw"
        component={DrawCharacter}
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

export default NewStoryRouter;
