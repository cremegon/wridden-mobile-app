import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArcGraph from "../../Components/ArcGraph";
import { FontAwesome } from "@expo/vector-icons";

export default Story3 = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ArcGraph />
      <ScrollView>
        <View style={{ marginBottom: 120 }}>
          <Text style={styles.title}>{route.params.paramKey}</Text>

          <Text style={styles.notes}>
            One evening, as Ella was brewing her signature espresso, she
            overheard a conversation between two strangers at the counter.
            Sarah, a young pianist new to the city, was lamenting her inability
            to find a suitable space to practice. James, an architect sitting
            next to her, offered a solution. He proposed creating a soundproof
            practice studio above the cafe.
            {"\n"}
            {"\n"}
            Excitement rippled through the community as James's idea became a
            reality. The studio was designed with elegance, complete with a
            grand piano and soundproof walls. Sarah's music filled the cafe, and
            patrons marveled at the harmonious fusion of coffee aromas and
            melodic tunes. It wasn't long before other artists began
            collaborating, and Simmer & Sip became a hub for artistic fusion. As
            the cafe's reputation grew, so did Ella's vision.
            {"\n"}
            {"\n"}
            She expanded the menu to include not just coffee but also a
            delectable assortment of pastries, sandwiches, and locally sourced
            delicacies. Her commitment to quality and community never wavered,
            and Simmer & Sip blossomed into a beloved institution in the city.
            Years passed, and Ella watched as the stories of her customers
            intertwined and evolved. She couldn't help but smile as she realized
            that Simmer & Sip had become more than she had ever dreamed. It was
            a place where life's beautiful moments were celebrated, where
            creativity thrived, and where people found a second family.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              flex: 1,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Story 2", { paramKey: "Chapter 3" })
              }
            >
              <FontAwesome
                name="arrow-circle-left"
                size={32}
                color="#ffa951"
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  borderRadius: 90,
                  alignSelf: "center",
                  elevation: 4,
                  paddingLeft: 16,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Story 4", { paramKey: "Chapter 4" })
              }
            >
              <FontAwesome
                name="arrow-circle-right"
                size={32}
                color="#ffa951"
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  borderRadius: 90,
                  alignSelf: "center",
                  elevation: 4,
                  paddingLeft: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  notes: {
    fontSize: 18,
    paddingTop: 0,
    paddingHorizontal: 25,
  },
  BGModal: {
    flex: 1,
    backgroundColor: "blue",
  },
  modal: {
    paddingTop: 50,
  },
});
