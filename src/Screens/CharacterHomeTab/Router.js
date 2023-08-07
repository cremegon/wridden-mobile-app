import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Card from "../../Components/Card";

const CharacterTabRouter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card
        title="Character List"
        navigation={navigation}
        image={require("../../assets/aww.png")}
        link="Character List"
      />

      <Card
        title="Character Draw"
        navigation={navigation}
        image={require("../../assets/idonot.png")}
        link="Character Draw"
      />
    </View>
    /*
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
    </View>*/
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

export default CharacterTabRouter;
