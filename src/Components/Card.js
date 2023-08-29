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
<<<<<<< Updated upstream
      </TouchableOpacity>
=======
      </Pressable>
>>>>>>> Stashed changes
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
<<<<<<< Updated upstream
    flex: 1,
    marginVertical: -15,
=======
    justifyContent: "flex-start",
    paddingTop: -30,
>>>>>>> Stashed changes
  },
  card: {
    height: 150,
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
