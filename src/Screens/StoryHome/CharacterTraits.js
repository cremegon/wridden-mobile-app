import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Modal,
  Pressable,
  Button,
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
import { Buttons2 } from "../../Components/Buttons2";

const CharacterTraits = ({ navigation, route }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
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
              title={"Gender"}
              placeholderTitle={"Select gender"}
            />
            <CharacterInputs
              title={"Physical Attributes"}
              placeholderTitle={"Enter physical traits..."}
            />
            <CharacterInputs
              title={"Emotional Attributes"}
              placeholderTitle={"Enter emotional traits..."}
            />
            <CharacterInputs
              title={"Likes"}
              placeholderTitle={"Enter likes..."}
            />
            <CharacterInputs
              title={"Dislikes"}
              placeholderTitle={"Enter dislike..."}
            />
            <View style={{ flexDirection: "row" }}>
              <Buttons2
                title={"Save"}
                navigation={navigation}
                link={"Character List"}
              />
              <View style={{ marginVertical: 20 }}>
                <Pressable onPress={() => SetIsModalVisible(true)}>
                  <Text style={styles.button}>Next</Text>
                </Pressable>
              </View>
            </View>

            <Modal
              visible={isModalVisible}
              transparent={false}
              onRequestClose={() => SetIsModalVisible(false)}
              animationType="slide"
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "royalblue",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    paddingBottom: 50,
                    borderRadius: 12,
                    shadowColor: "black",
                    elevation: 4,
                    width: 300,
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
                      marginTop: 30,
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
                        SetIsModalVisible(false);
                      }}
                    >
                      <Text style={styles.modalButton}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
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
