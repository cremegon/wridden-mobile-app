import { View, Text, StatusBar } from "react-native";
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
            <Buttons2
              title={"Next"}
              navigation={navigation}
              link={"Main Writing"}
            />
          </View>
        </ScrollView>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default CharacterTraits;
