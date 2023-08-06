import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import DrawerNavigator from "./Drawer/DrawerNavigator";

const ParentNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  );
};

export default ParentNavigator;
