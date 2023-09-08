import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Modal,
  Pressable,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CharacterInputs from "../../Components/CharacterInputs";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import CharacterDropdown from "../../Components/CharacterDropdown";
import DismissKeyboard from "../../Components/DismissKeyboard";
import { BrandButtonAlt } from "../../Components/BrandButtonAlt";
import { useStoryContext } from "../CreateStory/Router";

const CharacterTraits = ({ navigation, route }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //ideally a single state should hold all these variables
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [physicalAttributes, setPhysicalAttributes] = useState("");
  const [emotionalAttributes, setEmotionalAttributes] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");

  const { story, setStory } = useStoryContext();

  function addCharacter() {
    setStory((prev) => ({
      ...prev,
      characters: [
        ...prev.characters,
        {
          name: route.params.paramKey,
          age: age,
          gender: gender,
          physicalAttributes: physicalAttributes,
          emotionalAttributes: emotionalAttributes,
          likes: likes,
          dislikes: dislikes,
        },
      ],
    }));
  }

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(244,244,244,1)", flex: 1 }}>
      <StatusBar backgroundColor={"#e77f04"} />
      <AppHeader
        title={"Character Traits"}
        onPress={"Character Draw"}
        icon={"chevron-back"}
        navigation={navigation}
      />
      <DismissKeyboard>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              paddingBottom: 100,
            }}
          >
            <Text
              style={{
                fontFamily: "AlegreyaSans-Bold",
                marginVertical: 20,
                fontSize: 40,
                paddingHorizontal: 30,
                alignSelf: "flex-start",
              }}
            >
              {route.params.paramKey}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "grey",
                width: 350,
                marginTop: -10,
                marginHorizontal: 40,
                paddingBottom: 5,
                marginBottom: 30,
                alignSelf: "center",
              }}
            />
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 5,
                  fontFamily: "Nunito-ExtraBold",
                  fontSize: 20,
                  marginLeft: 5,
                  color: "#fd9418",
                }}
              >
                Age
              </Text>
              <TextInput
                placeholder="Enter age"
                textAlign="left"
                inputMode="numeric"
                value={age}
                onChangeText={(e) => setAge(e)}
                placeholderTextColor={"lightgrey"}
                style={{
                  borderWidth: 1,
                  borderColor: "#230a0a",
                  borderRadius: 10,
                  width: 350,
                  alignSelf: "center",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontFamily: "OpenSans-Regular",
                  fontSize: 16,
                  backgroundColor: "white",
                }}
              />
            </View>
            <CharacterDropdown
              onChange={setGender}
              value={gender}
              title={"Gender"}
              placeholderTitle={"Select gender"}
            />
            <CharacterInputs
              value={physicalAttributes}
              onChange={(e) => setPhysicalAttributes(e)}
              title={"Physical Attributes"}
              placeholderTitle={"Enter physical traits..."}
            />
            <CharacterInputs
              onChange={(e) => setEmotionalAttributes(e)}
              value={emotionalAttributes}
              title={"Emotional Attributes"}
              placeholderTitle={"Enter emotional traits..."}
            />
            <CharacterInputs
              value={likes}
              onChange={(e) => setLikes(e)}
              title={"Likes"}
              placeholderTitle={"Enter likes..."}
            />
            <CharacterInputs
              value={dislikes}
              onChange={(e) => setDislikes(e)}
              title={"Dislikes"}
              placeholderTitle={"Enter dislike..."}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginVertical: 20 }}>
                <Pressable
                  onPress={() => {
                    //pass in the params
                    addCharacter();
                    setIsModalVisible(true);
                  }}
                >
                  <Text style={styles.button}>Next</Text>
                </Pressable>
              </View>
            </View>

            <Modal
              visible={isModalVisible}
              transparent={false}
              onRequestClose={() => setIsModalVisible(false)}
              animationType="slide"
            >
              <ImageBackground
                source={require("../../assets/abstract_bg2.png")}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/V2_character_make.png")}
                  style={{
                    position: "absolute",
                    top: 60,
                    alignSelf: "center",
                    zIndex: 0,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    paddingBottom: 40,
                    borderRadius: 12,
                    shadowColor: "black",
                    elevation: 4,
                    width: 300,
                    marginTop: 200,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                    }}
                  >
                    Would you like to create a new character?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Pressable
                      onPress={() => navigation.navigate("Character Draw")}
                    >
                      <Text style={styles.modalButton}>Yes</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Main Writing");
                        setIsModalVisible(false);
                      }}
                    >
                      <Text style={styles.modalButton}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </ImageBackground>
            </Modal>
          </View>
        </ScrollView>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    color: "floralwhite",
    backgroundColor: "#fd9418",
    textAlign: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 5,
    marginHorizontal: 10,
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "rgba(253, 148, 24, 1)",
    width: 150,
    height: 45,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 30,
    fontSize: 20,
    fontFamily: "Nunito-ExtraBold",
    color: "floralwhite",
    marginHorizontal: 10,
  },
});

export default CharacterTraits;
