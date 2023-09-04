import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { charData } from "../../assets/images";

export default CharacterList = ({ navigation }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppHeader
        navigation={navigation}
        onPress={"Character Home Access"}
        icon={"chevron-back"}
        title={"Character List"}
      />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        {charData.map((item, index) => (
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={styles.charTitle}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedImageIndex(index);
                SetIsModalVisible(true);
              }}
            >
              <Image
                source={{
                  uri: item.uri,
                }}
                style={styles.charIcon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
            marginBottom: 150,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              paddingBottom: 100,
              borderRadius: 12,
              shadowColor: "black",
              elevation: 4,
            }}
          >
            <Image
              source={{ uri: charData[selectedImageIndex].uri }}
              style={{
                height: undefined,
                width: "80%",
                aspectRatio: 1,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 15,
                fontStyle: "italic",
              }}
            >
              {charData[selectedImageIndex].name}
            </Text>
            <Text style={{ textAlign: "center", marginTop: 10 }}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  charTitle: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    textAlign: "center",
    borderColor: "steelblue",
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  charIcon: {
    height: 120,
    width: 120,
    borderRadius: 90,
  },
});
