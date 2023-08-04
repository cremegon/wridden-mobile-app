import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CharacterHomeAccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Go to Character List"
          onPress={() => navigation.navigate("Character List")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Character Draw"
          onPress={() => navigation.navigate("Character Draw")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingBottom: 20,
    width: 200,
  },
});

export default CharacterHomeAccess;
