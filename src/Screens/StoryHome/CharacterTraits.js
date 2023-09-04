import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { TextInput } from "react-native-gesture-handler";

const CharacterTraits = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "rgba(244,244,244,1)", flex: 1 }}>
      <StatusBar backgroundColor={"#e77f04"} />
      <AppHeader
        title={"Character Traits"}
        onPress={"Character Draw"}
        icon={"chevron-back"}
        navigation={navigation}
      />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "AlegreyaSans-ExtraBold",
            marginVertical: 30,
            fontSize: 30,
            paddingHorizontal: 30,
            paddingVertical: 5,
            borderRadius: 30,
            borderWidth: 3,
          }}
        >
          John Doe
        </Text>

        <View style={{ alignSelf: "center", marginVertical: 15 }}>
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
            Physical Attributes
          </Text>
          <TextInput
            placeholder="Enter Physical Traits..."
            textAlign="left"
            multiline={true}
            placeholderTextColor={"lightgrey"}
            style={{
              borderWidth: 1,
              borderColor: "#230a0a",
              borderRadius: 10,
              width: 350,
              alignSelf: "center",
              paddingHorizontal: 10,
              paddingTop: 5,
              paddingBottom: 50,
              fontFamily: "OpenSans-Regular",
              fontSize: 16,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharacterTraits;
