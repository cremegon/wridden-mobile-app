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

const Card = ({ title, image, navigation, link, params }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(link, { paramKey: params })}
        style={{ marginHorizontal: 50 }}
      >
        <Image source={image} style={styles.card} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    height: 200,
    width: 400,
    borderRadius: 12,
  },
  title: {
    alignSelf: "center",
    top: 70,
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
    color: "grey",
    flexWrap: "wrap",
  },
});

export default Card;
