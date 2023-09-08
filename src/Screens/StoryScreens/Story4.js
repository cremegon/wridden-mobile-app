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

export default Story4 = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ArcGraph />
      <ScrollView>
        <View style={{ marginBottom: 120 }}>
          <Text style={styles.title}>{route.params.paramKey}</Text>

          <Text style={styles.notes}>
            Simmer & Sip was no longer just a cafe; it was a testament to the
            power of a single idea, the dedication of a passionate owner, and
            the warmth of a welcoming community. It was where moments were
            cherished, stories were told, and dreams were allowed to simmer,
            mature, and come to life.
            {"\n"}
            {"\n"}
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
                navigation.navigate("Story 3", { paramKey: "Chapter 3" })
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
