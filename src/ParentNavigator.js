import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import DrawerNavigator from "./Drawer/DrawerNavigator";
import LoginNavigator from "./Screens/LoginNavigator";

const ParentNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  );
};

export default ParentNavigator;
