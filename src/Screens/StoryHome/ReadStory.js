import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import Card from "../../Components/Card";

export default ReadStory = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const titleList = [
    { title: "Where We Simmer", nav: "Story 1" },
    { title: "Upperdown", nav: "Story 1" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(226,237,236,0.4)" }}>
      <AppHeader
        title={"Read Stories"}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Story Home Access"}
      />
      <ScrollView>
        <View>
          {titleList.map((item, index) => (
            <View key={index}>
              <Card
                title={item.title}
                navigation={navigation}
                image={require("../../assets/profile_bg.jpg")}
                link={item.nav}
                params={item.title}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
