import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import DismissKeyboard from "../../Components/DismissKeyboard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ArcGraph from "../../Components/ArcGraph";
import WritingButtons from "../../Components/WritingButtons";
import { bgData, charData } from "../../assets/images";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const MainWriting = ({ onLongPress, navigation, route }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ uri: bgData[2].source });
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <DismissKeyboard>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ImageBackground source={selectedImage} style={styles.container}>
          <ArcGraph />

          <TextInput
            style={styles.title}
            placeholder="Title"
            multiline={true}
          />
          <TextInput
            style={styles.notes}
            placeholder="Note"
            multiline={true}
            enablesReturnKeyAutomatically
            placeholderTextColor={"lightgrey"}
          />
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
              onPress={() => {
                handleImageSelection();
              }}
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
              onLongPress={() => SetIsModalVisible(true)}
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
          <Modal
            visible={isModalVisible}
            transparent={true}
            onRequestClose={() => SetIsModalVisible(false)}
            animationType="fade"
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 150,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  paddingVertical: 20,
                  borderRadius: 12,
                  shadowColor: "black",
                  elevation: 4,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontStyle: "italic",
                  }}
                >
                  Would you like to Save and Exit?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                >
                  <Pressable
                    onPress={() => navigation.navigate("Story Home Access")}
                  >
                    <Text style={styles.modalButton}>Yes</Text>
                  </Pressable>
                  <Pressable onPress={() => SetIsModalVisible(false)}>
                    <Text style={styles.modalButton}>No</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </GestureHandlerRootView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    fontSize: 30,
    marginTop: 70,
    paddingLeft: 20,
    fontWeight: "bold",
    flex: 1,
  },
  notes: {
    fontSize: 18,
    width: "90%",
    alignSelf: "center",
    flex: 5,
    textAlignVertical: "top",
  },
  BGModal: {
    flex: 1,
    backgroundColor: "blue",
  },
  modal: {
    paddingTop: 50,
  },
  modalButton: {
    backgroundColor: "pink",
    paddingHorizontal: 30,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 12,
    marginHorizontal: 20,
    color: "palevioletred",
  },
});

export default MainWriting;
