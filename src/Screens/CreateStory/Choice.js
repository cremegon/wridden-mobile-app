import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CharacterChoice = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.question}>
          Would you like to create a new Character?
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
          <Button
            title="Yes"
            onPress={() => navigation.navigate("Character Draw")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="No"
            onPress={() => navigation.navigate("Main Writing")}
          />
        </View>
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
    padding: 20,
    width: 150,
  },
  question: {
    padding: 10,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
});

export default CharacterChoice;
