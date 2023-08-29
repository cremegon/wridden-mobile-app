import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../Components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import { Appbar } from "react-native-paper";
import CardV2 from "../../Components/CardV2";
import { useNavigation } from "@react-navigation/native";

const StoryHomeAccess = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={"Welcome"} navigation={navigation} />
      <ScrollView>
        <Card
          title="Write New"
          navigation={navigation}
          image={require("../../assets/thunk.png")}
          link="Write New"
        />

        <Card
          title="Story List"
          navigation={navigation}
          image={require("../../assets/hmm.png")}
          link="Story List"
        />

        <Card
          title="Read Story"
          navigation={navigation}
          image={require("../../assets/oh.png")}
          link="Read Story"
        />
        <Card
          title="Character List"
          navigation={navigation}
          image={require("../../assets/aww.png")}
          link="Character List"
        />

        <Card
          title="Character Draw"
          navigation={navigation}
          image={require("../../assets/idonot.png")}
          link="Character Draw"
        />

        <Card
          title="Community Home"
          navigation={navigation}
          image={require("../../assets/oh.png")}
          link="Community Home"
        />
      </ScrollView>
    </SafeAreaView>
    /*
      <View style={styles.button}>
        <Button
          title="Go to Writing Screen"
          onPress={() => navigation.navigate("Write New")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Story List"
          onPress={() => navigation.navigate("Story List")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Read Story"
          onPress={() => navigation.navigate("Read Story")}
        />
      </View>
    </View> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },

  button: {
    paddingBottom: 20,
    width: 200,
  },
});

export default StoryHomeAccess;
