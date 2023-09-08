import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import Card from "../../Components/Card";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { btnData } from "../../assets/images";

const CharacterTabRouter = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/V2_character_make.png")}
        style={{
          position: "absolute",
          top: 5,
          alignSelf: "center",
          zIndex: 0,
        }}
      />

      <Text style={styles.title2}>Bring your Characters</Text>
      <Text style={styles.title1}>to Life!</Text>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 110 }}>
        <View style={{}}>
          <View
            style={{
              padding: 15,
              borderRadius: 40,
              paddingHorizontal: 25,
              borderColor: "#fd9418",
              width: 280,
              height: 120,
              backgroundColor: "white",
              elevation: 4,
              marginBottom: 20,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Character List")}>
              <Image
                source={require("../../assets/char_list.png")}
                style={{ width: 60, height: 60, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 16,
                  color: "#230a0a",
                  marginTop: 10,
                }}
              >
                Character List
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              padding: 15,
              borderRadius: 40,
              paddingHorizontal: 25,
              borderColor: "#fd9418",
              width: 280,
              height: 120,
              backgroundColor: "white",
              elevation: 4,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Character Draw")}>
              <Image
                source={require("../../assets/char_icon2.png")}
                style={{ width: 60, height: 60, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 16,
                  color: "#230a0a",
                  marginTop: 10,
                }}
              >
                Character Draw
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(226,237,236,0.4)",
  },
  title1: {
    position: "absolute",
    fontSize: 27,
    top: "44%",
    left: "50%",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#230a0a",
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderColor: "#ffa951",
    borderRadius: 40,
  },
  title2: {
    position: "absolute",
    fontSize: 35,
    top: "40%",
    left: "10%",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#230a0a",
    zIndex: 2,
  },
});

export default CharacterTabRouter;
