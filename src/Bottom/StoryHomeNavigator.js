import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WriteNew from "../Screens/WriteNew";
import StoryList from "../Screens/StoryList";
import ReadStory from "../Screens/ReadStory";
import StoryHomeAccess from "../Screens/StoryHomeAccess";

const Stack = createNativeStackNavigator();

const StoryHomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Story Home Access"
        component={StoryHomeAccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Write New"
        component={WriteNew}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story List"
        component={StoryList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Read Story"
        component={ReadStory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StoryHomeNavigator;
