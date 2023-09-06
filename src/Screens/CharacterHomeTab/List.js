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
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { charData } from "../../assets/images";
import { StatusBar } from "react-native";
import DatabaseContext from "../../Components/Context/DatabaseContext";

export default CharacterList = ({ navigation }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [characters, setCharacters] = useState([]);

  const dbCtx = useContext(DatabaseContext);

  useEffect(() => {
    dbCtx.transaction((tx) =>
      tx.executeSql(
        "select * from characters",
        [],
        (tx, { rows }) => {
          setCharacters(rows._array);
        },
        (tx, errors) => {
          console.log("Error selecting characters", errors);
        }
      )
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(244,244,244,1)" }}>
      <StatusBar backgroundColor={"#e77f04"} />
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
          <View style={{ alignItems: "center", marginTop: 30 }} key={index}>
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
                fontSize: 30,
                marginTop: 15,
                fontFamily: "AlegreyaSans-ExtraBoldItalic",
              }}
            >
              {charData[selectedImageIndex].name}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  charTitle: {
    fontSize: 18,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "white",
    backgroundColor: "white",
    elevation: 3,
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginBottom: 10,
    color: "#fd9418",
    fontFamily: "AlegreyaSans-ExtraBold",
  },
  charIcon: {
    height: 120,
    width: 120,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "#fd9418",
  },
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
