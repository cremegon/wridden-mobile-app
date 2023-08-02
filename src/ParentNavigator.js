import { View, Text } from "react-native";
import React from "react";
import DrawerNavigator from "./Drawer/DrawerNavigator";

const ParentNavigator = () => {
  return (
    <View>
      <Text>
        <DrawerNavigator />
      </Text>
    </View>
  );
};

export default ParentNavigator;
