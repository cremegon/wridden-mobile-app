import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../Components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { btnData, bgData } from "../../assets/images";

const StoryHomeAccess = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={bgData[4].source}
        style={{
          position: "absolute",
          top: 80,
          alignSelf: "center",
          zIndex: 0,
        }}
      />

      <Text style={styles.title1}>Explore the world of fantasies</Text>
      <Text style={styles.title2}>and create your own!</Text>

      <View style={{ alignItems: "center", width: "100%", marginTop: "105%" }}>
        <View
          style={{
            padding: 15,
            borderRadius: 40,
            paddingHorizontal: 25,
            borderColor: "#fd9418",
            width: 280,
            height: 130,
            marginBottom: 15,
            backgroundColor: "white",
            elevation: 4,
          }}
        >
          <Pressable onPress={() => navigation.navigate("Write New")}>
            <Image
              source={require("../../assets/write_icon2.png")}
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
              Write New
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              padding: 15,
              borderRadius: 40,
              paddingHorizontal: 25,
              borderColor: "#fd9418",
              width: 130,
              height: 130,
              backgroundColor: "white",
              elevation: 4,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Story List")}>
              <Image
                source={require("../../assets/storylist_icon2.png")}
                style={{ width: 60, height: 60, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 15,
                  color: "#230a0a",
                  marginTop: 10,
                }}
              >
                Story List
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              padding: 15,
              borderRadius: 40,
              paddingHorizontal: 25,
              borderColor: "#fd9418",
              marginLeft: 20,
              width: 130,
              height: 130,
              backgroundColor: "white",
              elevation: 4,
            }}
          >
            <Pressable onPress={() => navigation.navigate("Read Story")}>
              <Image
                source={require("../../assets/storylist_icon2.png")}
                style={{ width: 60, height: 60, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 15,
                  color: "#230a0a",
                  marginTop: 10,
                }}
              >
                Read Story
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
    /*
      <View style={styles.button}>
        <Button
          title="Go to Writing Screen"
          onPress={() => navigation.navigate("Write New")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Story List"
          onPress={() => navigation.navigate("Story List")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Read Story"
          onPress={() => navigation.navigate("Read Story")}
        />
      </View>
    </View> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,244,244,1)",
    zIndex: -2,
  },
  btn: {
    width: 370,
    height: 100,
    borderRadius: 20,
    marginVertical: 8,
  },
  title1: {
    position: "absolute",
    fontSize: 27,
    top: "41%",
    left: "7%",
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
    top: "44%",
    left: "18%",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#230a0a",
  },
});

export default StoryHomeAccess;
