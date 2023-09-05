import { View, Text } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { charData_gender } from "../datalist/CharacterData";

const CharacterDropdown = ({ title, placeholderTitle }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(charData_gender);
  return (
    <View style={{ zIndex: 100, alignSelf: "center", marginVertical: 15 }}>
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
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{ width: 350 }}
        textStyle={{ fontFamily: "OpenSans-Regular", fontSize: 16 }}
        closeAfterSelecting={true}
        placeholder={placeholderTitle}
        placeholderStyle={{ color: "lightgrey" }}
      />
    </View>
  );
};

export default CharacterDropdown;
