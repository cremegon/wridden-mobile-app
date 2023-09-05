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
import { iconData } from "../../assets/images";

const CommunityHome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e77f04" }}>
      <Image
        source={require("../../assets/doods_4.png")}
        style={{ position: "absolute", width: "100%", top: 30, height: "20%" }}
      />
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
              name="arrow-back-circle"
              size={40}
              color="#230a0a"
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
            fontSize: 35,
            color: "white",
            marginLeft: 20,
            marginTop: 10,
            fontFamily: "AlegreyaSans-ExtraBold",
          }}
        >
          {" "}
          Hi, Hussain
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            marginLeft: 28,
            marginTop: 0,
            fontFamily: "OpenSans-Regular",
            marginBottom: 5,
          }}
        >
          Find topics you like and interact with others!
        </Text>
        <View
          style={{
            backgroundColor: "rgba(244,244,244,1)",
            marginTop: 10,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            paddingBottom: 100,
          }}
        >
          <View style={{ height: 80, marginBottom: 5 }}>
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
              marginHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: "white",
              elevation: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#fd9418",
                paddingHorizontal: 12,
                borderRadius: 20,
                marginTop: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "floralwhite",
                  fontFamily: "AlegreyaSans-ExtraBold",
                  marginBottom: 4,
                }}
              >
                Prompt of the Day
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                marginHorizontal: 20,
                borderRadius: 20,
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  paddingVertical: 5,
                  borderRadius: 10,
                  fontFamily: "OpenSans-Italic",
                  color: "#230a0a",
                }}
              >
                It’s the last evening of your vacation and you’re watching the
                sunset with your friends/partner/family, wishing summer would
                never end. But just as the sun dips below the horizon, you
                notice it returning in reverse.
              </Text>
            </View>
          </View>

          <View style={{ height: 170, marginTop: 15 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 20, marginLeft: 20 }}
            >
              <View style={styles.horizontalScrollItems}>
                <Image
                  source={iconData[0].source}
                  style={styles.scrollItemIcon}
                />
                <Text style={styles.scrollText}>Mystery</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Image
                  source={iconData[1].source}
                  style={styles.scrollItemIcon}
                />
                <Text style={styles.scrollText}>Romance</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Image
                  source={iconData[2].source}
                  style={styles.scrollItemIcon}
                />
                <Text style={styles.scrollText}>Action</Text>
              </View>
              <View style={styles.horizontalScrollItems}>
                <Image
                  source={iconData[3].source}
                  style={styles.scrollItemIcon}
                />
                <Text style={styles.scrollText}>Fantasy</Text>
              </View>
            </ScrollView>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 10,
              marginLeft: 30,
            }}
          >
            Trending Posts
          </Text>

          <Posts
            title={"Need review for the ending pls"}
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
    backgroundColor: "#e0e7e6",
    borderRadius: 10,
    marginHorizontal: 10,
    color: "#230a0a",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    shadowColor: "black",
    elevation: 3,
  },
  horizontalScrollItems: {
    width: 130,
    height: 130,
    backgroundColor: "#e0e7e6",
    borderRadius: 40,
    marginHorizontal: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollText: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "AlegreyaSans-ExtraBold",
    color: "#3f2b2b",
    marginTop: 5,
  },
  scrollItemIcon: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 90,
    padding: 20,
    tintColor: "#3f2b2b",
  },
});

export default CommunityHome;
