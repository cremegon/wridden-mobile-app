import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const Card = ({ title, image, navigation, link, params }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(link, { paramKey: params })}
        style={{ marginHorizontal: 50, width: "100%" }}
      >
        <Image source={image} style={styles.card} resizeMode="cover" />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "royalblue",
    marginHorizontal: 20,
    borderRadius: 20,
    width: 380,
    height: 150,
  },
  card: {
    width: 380,
    height: 150,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    top: 50,
    left: 80,
    position: "absolute",
    fontSize: 25,
    color: "white",
    width: 150,
    fontFamily: "AlegreyaSans-ExtraBoldItalic",
  },
});

export default Card;
