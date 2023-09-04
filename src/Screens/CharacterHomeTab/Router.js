import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import Card from "../../Components/Card";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { btnData } from "../../assets/images";

const CharacterTabRouter = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={"Welcome"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          flex: 1,
          marginBottom: 30,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Character List")}>
          <Image source={btnData[4].source} style={{ borderRadius: 40 }} />
          <Text
            style={{
              position: "absolute",
              top: 150,
              left: 20,
              fontSize: 27,
              fontWeight: "bold",
              color: "floralwhite",
            }}
          >
            Character{"\n"}List
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Character List")}>
          <Image source={btnData[5].source} style={{ borderRadius: 40 }} />
          <Text
            style={{
              position: "absolute",
              top: 150,
              left: 20,
              fontSize: 27,
              fontWeight: "bold",
              color: "floralwhite",
            }}
          >
            Character{"\n"}Create
          </Text>
        </Pressable>
      </View>
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
    alignItems: "center",
    backgroundColor: "white",
  },

  button: {
    paddingBottom: 20,
    width: 200,
  },
});

export default CharacterTabRouter;
