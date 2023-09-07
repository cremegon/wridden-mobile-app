import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const CustomModal = ({ navigation, array }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);
  return (
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
          marginBottom: 120,
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
          }}
        >
          <Image
            source={array[selectedImageIndex].source}
            style={{
              height: undefined,
              width: "80%",
              aspectRatio: 1,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginTop: 15,
              fontFamily: "AlegreyaSans-ExtraBoldItalic",
            }}
          >
            {array[selectedImageIndex].title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "OpenSans-Regular",
            }}
          >
            Would you like to edit this Character?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={styles.modalButton}>Yes</Text>
            <Pressable onPress={() => SetIsModalVisible(false)}>
              <Text style={styles.modalButton}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
});

export default CustomModal;
