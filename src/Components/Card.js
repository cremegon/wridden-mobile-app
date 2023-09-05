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
        style={{ marginHorizontal: 50, marginTop: -10, width: "100%" }}
      >
        <View style={{ borderRadius: 20 }}>
          <Image source={image} style={styles.card} resizeMode="cover" />
          <Text style={styles.title}>{title}</Text>
        </View>
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
    marginRight: 5,
    width: 400,
    alignSelf: "center",
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    top: 60,
    left: 175,
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: 150,
  },
});

export default Card;
