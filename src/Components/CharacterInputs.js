import { View, Text, TextInput } from "react-native";
import React from "react";

const CharacterInputs = ({
  navigation,
  title,
  placeholderTitle,
  onChange,
  value,
}) => {
  return (
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
        {title}
      </Text>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholderTitle}
        textAlign="left"
        value={value}
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
          backgroundColor: "white",
        }}
      />
    </View>
  );
};

export default CharacterInputs;
