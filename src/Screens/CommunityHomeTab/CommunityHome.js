import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { charData } from "../../assets/images";
import Posts from "../../Components/Posts";

const CommunityHome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "royalblue" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={40}
              color="white"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: charData[1].uri,
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 90,
              borderWidth: 2,
              borderColor: "gold",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          {" "}
          Hi, Hussain
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            marginLeft: 28,
            marginTop: 5,
          }}
        >
          Find topics you like and interact with others!
        </Text>
        <View
          style={{
            backgroundColor: "yellow",
            marginTop: 10,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            paddingBottom: 100,
          }}
        >
          <View style={{ height: 80 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 20, marginHorizontal: 20 }}
            >
              <View>
                <Text style={styles.horizontalScrollText}>Popular</Text>
              </View>
              <View>
                <Text style={styles.horizontalScrollText}>Recommended</Text>
              </View>
              <View>
                <Text style={styles.horizontalScrollText}>New Topic</Text>
              </View>
              <View>
                <Text style={styles.horizontalScrollText}>Trending</Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              alignItems: "center",
              marginHorizontal: 50,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "khaki",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Prompt of the Day
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontStyle: "italic",
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 10,
              }}
            >
              Rainy day, Colorful Apricot, Rust
            </Text>
          </View>

          <View style={{ height: 150, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 20, marginLeft: 20 }}
            >
              <View style={styles.horizontalScrollItems}>
                <Text style={styles.scrollText}>New Stories</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Text style={styles.scrollText}>Top Stories</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Text style={styles.scrollText}>New Topic</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Text style={styles.scrollText}>Trending</Text>
              </View>
            </ScrollView>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 20,
              marginLeft: 30,
            }}
          >
            Trending Posts
          </Text>

          <Posts
            title={"Need Review for the Ending pls"}
            name={"Michael Dawodu"}
            number={5}
          />
          <Posts
            title={"Is a soft magic system good?"}
            name={"Yologo Ya"}
            number={2}
          />
          <Posts
            title={"hi I'm new here :)"}
            name={"Oleksandra Pichuhina"}
            number={1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScrollText: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    backgroundColor: "lightsalmon",
    borderRadius: 10,
    marginHorizontal: 10,
    color: "maroon",
    shadowColor: "black",
    elevation: 3,
  },
  horizontalScrollItems: {
    width: 130,
    height: 130,
    backgroundColor: "steelblue",
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "black",
    elevation: 3,
  },
  scrollText: {
    fontSize: 30,
    marginLeft: 6,
    marginTop: 10,
    fontWeight: "bold",
    color: "skyblue",
  },
});

export default CommunityHome;
