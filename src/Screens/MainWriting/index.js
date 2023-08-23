import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Modal } from "react-native";
import { StatusBar } from "react-native";
import DismissKeyboard from "../../Components/DismissKeyboard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ArcGraph from "../../Components/ArcGraph";
import { SafeAreaView } from "react-native-safe-area-context";

const MainWriting = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DismissKeyboard>
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
          />
        </SafeAreaView>
      </DismissKeyboard>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    paddingVertical: 20,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  notes: {
    fontSize: 18,
    paddingTop: 0,
    paddingLeft: 25,
  },
  BGModal: {
    flex: 1,
    backgroundColor: "blue",
  },
  modal: {
    paddingTop: 50,
  },
});

export default MainWriting;
