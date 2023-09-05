import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import Card from "../../Components/Card";
import { btnData } from "../../assets/images";

const StoryList = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const titleList = [
    { title: "The Big Bad Wolf", nav: "Chapter Select" },
    { title: "Beanstalkers", nav: "Story 2" },
    { title: "Snowstorm and the Seven Towers", nav: "Story 3" },
    { title: "Glorious Gentlemen", nav: "Story 4" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <AppHeader
        title={"Story List"}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Story Home Access"}
      />
      <ScrollView>
        <View style={{ marginBottom: 100, marginTop: 20 }}>
          {titleList.map((item, index) => (
            <Card
              title={item.title}
              navigation={navigation}
              image={btnData[2].source}
              link={item.nav}
              params={item.title}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryList;
