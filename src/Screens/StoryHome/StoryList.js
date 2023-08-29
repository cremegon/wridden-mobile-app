import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../Components/AppHeader";
import Card from "../../Components/Card";

const StoryList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppHeader
        title={"Story List"}
        icon={"chevron-back"}
        navigation={navigation}
        onPress={"Story Home Access"}
      />
      <ScrollView>
        <View>
          <Card
            title="The Big Bad Wolf"
            navigation={navigation}
            image={require("../../assets/oh.png")}
            link="Community Home"
          />
          <Card
            title="Beanstalkers"
            navigation={navigation}
            image={require("../../assets/oh.png")}
            link="Community Home"
          />
          <Card
            title="Snowstorm and the Seven Towers"
            navigation={navigation}
            image={require("../../assets/oh.png")}
            link="Community Home"
          />
          <Card
            title="Glorious Gentlemen"
            navigation={navigation}
            image={require("../../assets/oh.png")}
            link="Community Home"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryList;
