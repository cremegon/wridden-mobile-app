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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
            {"\n"}
            {"\n"}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
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
