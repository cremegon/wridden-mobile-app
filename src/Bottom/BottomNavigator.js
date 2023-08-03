import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoryHome from "./StoryHome";
import CharacterHome from "./CharacterHome";
import CommunityHome from "./CommunityHome";

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Story Home"
        component={StoryHome}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Character Home"
        component={CharacterHome}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Community Home"
        component={CommunityHome}
        options={{ headerShown: false }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
