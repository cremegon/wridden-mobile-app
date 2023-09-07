import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { charData } from "../../assets/images";
import Posts from "../../Components/Posts";
import { iconData } from "../../assets/images";
import { FlatList } from "react-native-gesture-handler";
import { postData } from "../../assets/posts/posts";

const CommunityHome = ({ navigation }) => {
  const horizontalTextList = [
    {
      key: 1,
      title: "Popular",
    },
    {
      key: 2,
      title: "Recommended",
    },
    {
      key: 3,
      title: "New Topic",
    },
    {
      key: 4,
      title: "Trending",
    },
  ];
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
              {horizontalTextList.map((item, index) => (
                <View key={index}>
                  <Text style={styles.horizontalScrollText}>{item.title}</Text>
                </View>
              ))}
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

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ height: 150, marginTop: 20, marginLeft: 20 }}
            horizontal={true}
            data={iconData}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("Community Story", {
                    paramKey: item.title,
                  })
                }
              >
                <View style={styles.horizontalScrollItems}>
                  <Image source={item.source} style={styles.scrollItemIcon} />

                  <Text style={styles.scrollText}>{item.title}</Text>
                </View>
              </Pressable>
            )}
          />

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

          <FlatList
            data={postData}
            renderItem={({ item }) => (
              <Posts title={item.title} name={item.name} number={item.number} />
            )}
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
