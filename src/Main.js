import { View, Text } from "react-native";
import React from "react";
import WriteNew from "./Screens/StoryHome/WriteNew";
import StoryList from "./Screens/StoryHome/StoryList";
import ReadStory from "./Screens/StoryHome/ReadStory";
import StoryHomeAccess from "./Screens/StoryHome";
import CharacterTabRouter from "./Screens/CharacterHomeTab/Router";
import CharacterList from "./Screens/CharacterHomeTab/List";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawingCharacter2 from "./Components/DrawCharacter2";
import CommunityHome from "./Screens/CommunityHomeTab/CommunityHome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Screens/Profile";
import story1 from "./Screens/StoryScreens/Story1";
import story2 from "./Screens/StoryScreens/Story2";
import Story3 from "./Screens/StoryScreens/story3";
import Story2 from "./Screens/StoryScreens/Story2";
import Story1 from "./Screens/StoryScreens/Story1";
import Story4 from "./Screens/StoryScreens/story4";

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StoryHomeTab = () => {
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
      <Stack.Screen
        name="Story 1"
        component={Story1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story 2"
        component={Story2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story 3"
        component={Story3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story 4"
        component={Story4}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CharacterHomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character Home Access"
        component={CharacterTabRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character List"
        component={CharacterList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Character Draw"
        component={DrawingCharacter2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      >
        <Bottom.Screen
          name="Story Home"
          component={StoryHomeTab}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-home"
                  size={24}
                  color={tabInfo.focused ? "red" : "grey"}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Character Home"
          component={CharacterHomeTab}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="body"
                  size={24}
                  color={tabInfo.focused ? "red" : "grey"}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Community Home"
          component={CommunityHome}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-people"
                  size={24}
                  color={tabInfo.focused ? "red" : "grey"}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="person-circle"
                  size={24}
                  color={tabInfo.focused ? "red" : "grey"}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </View>
  );
};

export default Main;
