import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommunityHome from "./CommunityHome";
import StoryHomeNavigator from "./StoryHomeNavigator";
import CharacterHomeNavigator from "./CharacterHomeNavigator";

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Story Home"
        component={StoryHomeNavigator}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Character Home"
        component={CharacterHomeNavigator}
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
