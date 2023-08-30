import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "../../Components/Buttons";

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
        <View style={{ padding: 20, width: 150 }}>
          <Buttons
            title="Yes"
            onPress={() => navigation.navigate("Character Draw")}
          />
        </View>
        <View style={{ padding: 20, width: 150 }}>
          <Buttons
            title="No"
            onPress={() => navigation.navigate("Main Writing")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
