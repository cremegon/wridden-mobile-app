import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../../Components/SearchBar";
import SmallButton from "../../Components/SmallButton";
import TopStoriesCard from "../../Components/TopStoriesCard";
import CommunityButton from "../../Components/CommunityButton";
import AppHeader from "../../Components/AppHeader";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const CommunityHome = () => {
  return (
    <View>
      <AppHeader title={"Welcome"} back={false} />
      <ScrollView>
        <SearchBar />
        <View style={styles.promptButton}>
          <Text style={styles.prompt}> Prompt of the day </Text>
          <SmallButton title="participate" />
        </View>
        <TopStoriesCard
          story="That"
          author="She"
          story1="Dumb"
          author1="Smart"
        />
        <CommunityButton title="New Stories" />
        <CommunityButton title="New Authors" />
        <Text>Community Home</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  prompt: {
    fontFamily: FontFamily.materialThemeTitleLarge,
    fontSize: FontSize.materialThemeTitleLarge_size,
    marginLeft: 20,
  },

  promptButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default CommunityHome;
