import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BrandButton from "../../Components/BrandButton";
import { BrandButtonAlt } from "../../Components/BrandButtonAlt";

export default CharacterChoice = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontStyle: "italic" }}>
          Would you like to create a new Character?
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <BrandButtonAlt
          title={"Yes"}
          link={"Character Draw"}
          navigation={navigation}
        />
        <BrandButtonAlt
          title={"No"}
          link={"Main Writing"}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};
