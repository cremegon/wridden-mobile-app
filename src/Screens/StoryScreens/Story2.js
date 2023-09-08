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

export default Story2 = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ArcGraph />
      <ScrollView>
        <View style={{ marginBottom: 120 }}>
          <Text style={styles.title}>{route.params.paramKey}</Text>

          <Text style={styles.notes}>
            Days turned into weeks, and Alex became a regular at the cafe. Ella
            noticed the transformation in Alex's writing, from frustration to
            inspiration. They struck up conversations about life, dreams, and
            the power of finding a place where one could simmer in thought. As
            winter gave way to spring, Alex's book neared completion, and Ella
            couldn't have been prouder. Their friendship was one of the many
            beautiful stories that had unfolded within the cozy walls of Simmer
            & Sip. In the end, Simmer & Sip was not just a cafe; it was a place
            where people simmered in the warmth of human connection, where the
            chaotic world outside could be put on hold, and where dreams were
            given the space to flourish. Ella had created a sanctuary where
            life's moments could be savored, and in doing so, she had enriched
            the lives of everyone who crossed her cafe's threshold.
            {"\n"}
            {"\n"}
            As the months passed, Simmer & Sip continued to flourish. Word of
            mouth spread, drawing in more people seeking solace, connection, and
            a perfect cup of coffee. Ella's cafe became a true cornerstone of
            the community, a place where celebrations were toasted and sorrows
            shared. Alex, the young writer, finished their novel with a sense of
            accomplishment and gratitude to Ella for providing the nurturing
            atmosphere they needed. They dedicated their book to "Simmer & Sip,
            where stories simmered and dreams found their voice." But Simmer &
            Sip was not just a place for writers and dreamers. It became a hub
            for local artists, musicians, and thinkers. Ella organized open mic
            nights, art exhibitions, and poetry readings that turned her cozy
            cafe into a vibrant hub of creativity. The walls adorned with local
            artwork spoke volumes about the talent that thrived within the
            community.
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
                navigation.navigate("Story 1", { paramKey: "Chapter 1" })
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
                navigation.navigate("Story 3", { paramKey: "Chapter 3" })
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
