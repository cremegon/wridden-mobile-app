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
<<<<<<< Updated upstream
=======
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./Screens/Profile";
>>>>>>> Stashed changes

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

<<<<<<< Updated upstream
const CommunityHomeTab = () => {
  return (
    <View>
      <Text>Community Home</Text>
    </View>
=======
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
>>>>>>> Stashed changes
  );
};

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
<<<<<<< Updated upstream
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
=======
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
          headerShown: false,
          tabBarHideOnKeyboard: true,
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
>>>>>>> Stashed changes
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
        <Stack.Screen
          name="Community Home"
          component={CommunityHome}
<<<<<<< Updated upstream
          options={{ headerShown: false }}
=======
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
>>>>>>> Stashed changes
        />
      </Stack.Navigator>
    </View>
  );
};

export default Main;
