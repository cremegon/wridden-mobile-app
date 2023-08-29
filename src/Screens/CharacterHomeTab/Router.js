import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Card from "../../Components/Card";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const CharacterTabRouter = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={"Welcome"} />
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
    </SafeAreaView>
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },

  button: {
    paddingBottom: 20,
    width: 200,
  },
});

export default CharacterTabRouter;
