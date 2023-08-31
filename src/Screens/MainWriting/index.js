import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { StatusBar } from "react-native";
import DismissKeyboard from "../../Components/DismissKeyboard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ArcGraph from "../../Components/ArcGraph";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import WritingButtons from "../../Components/WritingButtons";

const MainWriting = ({ onLongPress, navigation }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  return (
    <DismissKeyboard>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
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
          <WritingButtons onLongPress={() => SetIsModalVisible(true)} />
          <Modal
            visible={isModalVisible}
            transparent={true}
            onRequestClose={() => SetIsModalVisible(false)}
            animationType="slide"
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
        </SafeAreaView>
      </GestureHandlerRootView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    paddingTop: 50,
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
