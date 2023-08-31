import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { bgData } from "../assets/images";

export default WritingButtons = ({ onLongPress }) => {
  const [selectedImage, setSelectedImage] = useState(bgData[0].source);
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <MaterialCommunityIcons
        name="image"
        size={24}
        color="coral"
        style={{
          backgroundColor: "gold",
          borderWidth: 2,
          padding: 10,
          borderRadius: 90,
          borderColor: "coral",
          alignSelf: "center",
          elevation: 4,
          paddingLeft: 13,
        }}
        onPress={handleImageSelection}
      />
      <Entypo
        name="save"
        size={24}
        color="coral"
        style={{
          backgroundColor: "gold",
          borderWidth: 2,
          padding: 10,
          borderRadius: 90,
          borderColor: "coral",
          alignSelf: "center",
          elevation: 4,
          paddingLeft: 13,
          marginRight: 170,
          marginLeft: 20,
        }}
        onPress={() => console.warn("Story Saved")}
        onLongPress={onLongPress}
      />
      <FontAwesome
        name="arrow-circle-right"
        size={32}
        color="coral"
        style={{
          backgroundColor: "gold",
          borderWidth: 2,
          padding: 15,
          borderRadius: 90,
          borderColor: "coral",
          alignSelf: "center",
          elevation: 4,
          paddingLeft: 18,
        }}
      />
    </View>
  );
};
