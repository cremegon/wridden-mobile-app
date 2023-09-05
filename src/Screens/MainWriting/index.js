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
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DatabaseContext from "../../Components/Context/DatabaseContext";
import { UserContext } from "../../Components/Context/UserContext";

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

  const dbCtx = useContext(DatabaseContext);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [storyId, setStoryId] = useState();

  const inset = useSafeAreaInsets();

  const handleStorySave = () => {
    //if story is not in context, create it
    if (!storyId) {
      dbCtx.transaction((tx) => {
        tx.executeSql(
          "insert into stories (title, user_id) values (?, ?)",
          [title, user.id],
          (tx, result) => {
            console.log("Story Insert Successful");
            //this should return id and maintain the context
            //as long as the view is open to ensure that a duplicate
            //story is not inserted somehow.
            result.insertId;
          },
          (tx, error) => {
            console.log("Error inserting data:", error);
          }
        );
      });
    } else {
      //else upsert sections of the story and the title if changed.
    }
  };

  return (
    <DismissKeyboard>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ImageBackground source={selectedImage} style={styles.container}>
          <StatusBar backgroundColor={"#ffa951"} />
          <ArcGraph />
          <TextInput
            value={title}
            onChangeText={setTitle}
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
              marginTop: 60,
            }}
          >
            <MaterialCommunityIcons
              name="image"
              size={24}
              color="#ffa951"
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 90,
                alignSelf: "center",
                elevation: 4,
                paddingLeft: 10,
              }}
              onPress={() => {
                handleImageSelection();
              }}
            />
            <Entypo
              name="save"
              size={24}
              color="#ffa951"
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 90,
                alignSelf: "center",
                elevation: 4,
                paddingLeft: 10,
                marginRight: 170,
                marginLeft: 20,
              }}
              onPress={() => handleStorySave()}
              onLongPress={() => SetIsModalVisible(true)}
            />
            <FontAwesome
              name="arrow-circle-right"
              size={32}
              color="#ffa951"
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 90,
                alignSelf: "center",
                elevation: 4,
                paddingLeft: 16,
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
                  padding: 30,
                  paddingVertical: 30,
                  borderRadius: 12,
                  shadowColor: "black",
                  elevation: 4,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginVertical: 10,
                    fontFamily: "OpenSans-Italic",
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
    marginTop: 100,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  notes: {
    fontSize: 18,
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    textAlignVertical: "top",
    flex: 1,
    marginBottom: 70,
  },
  BGModal: {
    flex: 1,
    backgroundColor: "blue",
  },
  modal: {
    paddingTop: 50,
  },
  modalButton: {
    color: "floralwhite",
    backgroundColor: "#fd9418",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 25,
    elevation: 5,
    marginHorizontal: 10,
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
  },
});

export default MainWriting;
