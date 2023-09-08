import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
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
        backgroundColor: "rgba(244,244,244,1)",
      }}
    >
      <Image
        source={require("../../assets/character_make.png")}
        style={{
          position: "absolute",
          top: 150,
          alignSelf: "center",
          zIndex: 0,
        }}
      />

      <Text style={styles.title1}>Would you like to...</Text>
      <Text style={styles.title2}>to create a new Character?</Text>

      <View style={{ marginTop: "50%" }}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title1: {
    position: "absolute",
    fontSize: 27,
    top: "49%",
    left: "4%",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#230a0a",
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderColor: "#ffa951",
    borderRadius: 40,
  },
  title2: {
    position: "absolute",
    fontSize: 35,
    top: "52%",
    left: "3%",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#230a0a",
  },
});
