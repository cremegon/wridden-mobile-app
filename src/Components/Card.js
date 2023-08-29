import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontSize } from "../GlobalStyles";

const Card = ({ title, image, navigation, link }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate(link)}>
        <Image source={image} style={styles.card} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingTop: -30,
  },
  card: {
    height: 200,
    width: 400,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    position: "absolute",
    paddingLeft: "10%",
    paddingTop: "20%",
    fontSize: 40,
    fontWeight: "bold",
    color: "grey",
  },
});

export default Card;
