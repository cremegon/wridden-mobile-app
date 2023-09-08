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

export default Story1 = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ArcGraph />
      <ScrollView>
        <View style={{ marginBottom: 120 }}>
          <Text style={styles.title}>{route.params.paramKey}</Text>

          <Text style={styles.notes}>
            In the heart of a bustling city, amidst the chaos and cacophony of
            daily life, there existed a hidden oasis called "Simmer & Sip." It
            wasn't just a cafe; it was a haven where time seemed to slow down,
            and the world outside melted away. Simmer & Sip was a cozy, dimly
            lit space adorned with plush armchairs, soft jazz playing in the
            background, and the tantalizing scent of freshly brewed coffee
            wafting through the air. It was a place where people gathered not
            only to satisfy their caffeine cravings but also to simmer down and
            savor life's moments. At the heart of this sanctuary was Ella, the
            cafe's owner and barista extraordinaire. She had a knack for brewing
            the perfect cup of coffee, a skill she had honed over the years. But
            Simmer & Sip was more than just a business to her; it was her
            passion project, a place where people could find solace and
            connection.
            {"\n"}
            {"\n"}
            The cafe's regulars knew that when life became too hectic or the
            world too overwhelming, Simmer & Sip was the place to go. Ella would
            greet them with a warm smile, a listening ear, and a perfectly
            crafted cappuccino. As customers sipped their drinks, their
            conversations simmered. Strangers became friends, lovers grew
            closer, and artists found inspiration amidst the cozy ambiance.
            Simmer & Sip was where friendships were forged, where secrets were
            shared, and where dreams were nurtured. One chilly winter evening,
            as snowflakes fell gently outside, a young writer named Alex walked
            into Simmer & Sip. With a notebook in hand and writer's block in
            mind, Alex ordered a mocha and took a seat by the window. The
            ambiance enveloped Alex like a warm hug, and soon, the words began
            to flow.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Story 2", { paramKey: "Chapter 2" })
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
