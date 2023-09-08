import { View, Text, ScrollView, StatusBar } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import Card from "../../Components/Card";
import { bgData, btnData } from "../../assets/images";
import DatabaseContext from "../../Components/Context/DatabaseContext";
import { UserContext } from "../../Components/Context/UserContext";

const StoryList = ({ navigation }) => {
  const dbCtx = useContext(DatabaseContext);
  const { user } = useContext(UserContext);

  const [stories, setStories] = useState();

  useEffect(() => {
    dbCtx.transaction(
      (tx) =>
        tx.executeSql(
          "select * from stories where user_id=?",
          [user.id],
          (tx, { rows }) => setStories(rows._array)
        ),
      (tx, error) => {
        console.log("Error fetching stories", error);
      }
    );
  }, []);

  const titleList = ["Story 1", "Story 2", "Story 3", "Story 4"];

  nav: return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(226,237,236,0.4)" }}>
      <AppHeader
        title={"Story List"}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Story Home Access"}
      />
      <StatusBar backgroundColor={"#e77f04"} />
      <ScrollView>
        <View style={{ marginBottom: 100, marginTop: 20 }}>
          {(stories &&
            stories.map((item, index) => {
              random_nav =
                titleList[Math.floor(Math.random() * titleList.length)];
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  navigation={navigation}
                  image={require("../../assets/stories/readstory1.png")}
                  link={random_nav}
                  params={item.title}
                />
              );
            })) || (
            <Text style={{ color: "black", fontSize: 25, textAlign: "center" }}>
              You do not have any stories.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryList;
