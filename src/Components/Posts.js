import { View, Text, Image } from "react-native";
import React from "react";
import { charData } from "../assets/images";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default Posts = ({ title, name, number }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 15,
        width: 370,
        paddingVertical: 10,
        paddingHorizontal: 5,
        paddingBottom: 20,
        marginTop: 15,
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
            borderColor: "limegreen",
            marginLeft: 15,
            marginTop: 10,
          }}
        />
        <View style={{ paddingTop: 7, marginHorizontal: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 70 }}>
            {title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "grey" }}>{name}</Text>
            <View
              style={{
                backgroundColor: "limegreen",
                width: 7,
                height: 7,
                borderRadius: 90,
                marginTop: 8,
                justifyContent: "center",
                marginLeft: 5,
              }}
            />
            <Text style={{ marginLeft: 5, color: "grey" }}>1h ago</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <Text style={{ flexWrap: "wrap", fontFamily: "OpenSans-Regular" }}>
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
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="thumbs-up" size={20} color="#ffc07f" />
          <Text style={{ marginTop: 2, marginHorizontal: 5, color: "grey" }}>
            23 votes
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="chatbubble-ellipses" size={20} color="#ffc07f" />
          <Text style={{ marginTop: 2, marginHorizontal: 5, color: "grey" }}>
            9 comments
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="eye" size={20} color="#ffc07f" />
          <Text style={{ marginTop: 2, marginHorizontal: 5, color: "grey" }}>
            35 views
          </Text>
        </View>
      </View>
    </View>
  );
};
