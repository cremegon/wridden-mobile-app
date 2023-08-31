import { View, Text, Image } from "react-native";
import React from "react";
import { charData } from "../assets/images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default Posts = ({ title, name, number }) => {
  return (
    <View
      style={{
        backgroundColor: "khaki",
        alignSelf: "center",
        borderRadius: 15,
        marginHorizontal: 25,
        paddingVertical: 10,
        paddingHorizontal: 5,
        paddingBottom: 20,
        marginTop: 8,
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: charData[number].uri,
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 90,
            borderWidth: 2,
            borderColor: "gold",
            marginLeft: 15,
            marginTop: 10,
          }}
        />
        <View style={{ paddingTop: 7, marginHorizontal: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>{name}</Text>
            <Text style={{ marginLeft: 10 }}>1h ago</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={{ flexWrap: "wrap" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="thumbs-o-up" size={20} color="grey" />
          <Text style={{ marginTop: 2, marginHorizontal: 5 }}>23 votes</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="comment-o" size={20} color="grey" />
          <Text style={{ marginTop: 2, marginHorizontal: 5 }}>9 comments</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="eye" size={20} color="grey" />
          <Text style={{ marginTop: 2, marginHorizontal: 5 }}>35 views</Text>
        </View>
      </View>
    </View>
  );
};
