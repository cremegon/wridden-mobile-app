import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  storyData,
  storyData1,
  storyData2,
  storyData3,
} from "../../assets/stories/stories";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native";

const CommunityStory = ({ navigation, route }) => {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [storyDataIndex, setStoryDataIndex] = useState("");
  const [arrayIndex, setArrayIndex] = useState(storyData1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(240,245,245,1)" }}>
      <StatusBar backgroundColor={"#e77f04"} />
      <AppHeader
        title={`${route.params.paramKey} Stories`}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Community Home"}
      />
      <ScrollView>
        <View style={{ flex: 1, marginBottom: 100 }}>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "#e77f04",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/stories/cover_2.png")}
              resizeMode="cover"
              style={{
                width: 500,
                height: 200,
                opacity: 0.1,
              }}
            />
            <View style={{ width: 250, height: 100, position: "absolute" }}>
              <Text style={styles.header}>
                Disover the World of {route.params.paramKey}
              </Text>
              <Text style={styles.header2}>
                "Sheedi" - by Aurangzeb Kirthal{" "}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>Popular Titles</Text>
          <FlatList
            horizontal={true}
            data={storyData1}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedImageIndex(item.id);
                  SetIsModalVisible(true);
                  setArrayIndex(storyData1);
                }}
              >
                <View
                  style={{
                    height: 200,
                    width: 140,
                    marginLeft: 20,
                    marginVertical: 10,
                    backgroundColor: "grey",
                    borderRadius: 5,
                    elevation: 3,
                  }}
                >
                  <Image
                    source={item.source}
                    style={{
                      height: 200,
                      width: 140,
                      opacity: 0.6,
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.cardTitles}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.title}>Trending Titles</Text>
          <FlatList
            horizontal={true}
            data={storyData2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedImageIndex(item.id);
                  SetIsModalVisible(true);
                  setArrayIndex(storyData2);
                }}
              >
                <View
                  style={{
                    height: 200,
                    width: 140,
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginVertical: 10,
                    backgroundColor: "grey",
                    borderRadius: 5,
                    elevation: 3,
                  }}
                >
                  <Image
                    source={item.source}
                    style={{
                      height: 200,
                      width: 140,
                      opacity: 0.8,
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.cardTitles}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.title}>Discover New Titles</Text>
          <FlatList
            horizontal={true}
            data={storyData3}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedImageIndex(item.id);
                  SetIsModalVisible(true);
                  setArrayIndex(storyData3);
                }}
              >
                <View
                  style={{
                    height: 200,
                    width: 140,
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginVertical: 10,
                    backgroundColor: "grey",
                    borderRadius: 5,
                    elevation: 3,
                  }}
                >
                  <Image
                    source={item.source}
                    style={{
                      height: 200,
                      width: 140,
                      opacity: 0.8,
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.cardTitles}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
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
            marginBottom: 130,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 50,
              borderRadius: 12,
              shadowColor: "black",
              elevation: 4,
            }}
          >
            <Image
              source={arrayIndex[selectedImageIndex].source}
              style={{
                height: undefined,
                width: "95%",
                aspectRatio: 2,
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
              {arrayIndex[selectedImageIndex].title}
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
  header: {
    position: "absolute",
    left: 70,
    top: 90,
    fontFamily: "Nunito-ExtraBold",
    fontSize: 25,
    color: "white",
  },
  header2: {
    position: "absolute",
    left: 70,
    top: 160,
    fontFamily: "OpenSans-SemiBoldItalic",
    fontSize: 14,
    color: "white",
  },
  title: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 17,
    marginLeft: 20,
    marginTop: 10,
  },
  cardTitles: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    textAlign: "center",
    marginHorizontal: 20,
    color: "white",
    fontFamily: "OpenSans-SemiBoldItalic",
    fontSize: 15,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default CommunityStory;
