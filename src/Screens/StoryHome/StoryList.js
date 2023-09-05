import { View, Text, ScrollView } from "react-native";
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

  const titleList = [
    { title: "The Big Bad Wolf", nav: "Chapter Select" },
    { title: "Beanstalkers", nav: "Story 2" },
    { title: "Snowstorm and the Seven Towers", nav: "Story 3" },
    { title: "Glorious Gentlemen", nav: "Story 4" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(226,237,236,0.4)" }}>
      <AppHeader
        title={"Story List"}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Story Home Access"}
      />
      <ScrollView>
        <View style={{ marginBottom: 100, marginTop: 20 }}>
          {(stories &&
            stories.map((item, index) => (
              <Card
                key={item.id}
                title={item.title}
                navigation={navigation}
                image={btnData[2].source}
                link={item.nav}
                params={item.title}
              />
            ))) || (
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
