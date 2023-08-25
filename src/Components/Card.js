import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ title, image, navigation, link }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Image source={image} style={styles.card} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: -15,
  },
  card: {
    height: 150,
    width: 400,
  },
  title: {
    textAlign: "center",
  },
});

export default Card;
