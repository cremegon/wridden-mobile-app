import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Test from "../../Components/Card";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../Components/Card";

const StoryHomeAccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
          title="Story List"
          navigation={navigation}
          image={require("../../assets/oh.png")}
          link="Read Story"
        />
      </ScrollView>
    </View>
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
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingBottom: 20,
    width: 200,
  },
});

export default StoryHomeAccess;
