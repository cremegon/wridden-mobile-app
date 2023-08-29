import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const TopStoriesCard = ({
  story,
  author,
  story1,
  author1,
  navigation,
  link,
}) => {
  return (
    <View style={styles.topStories}>
      <View style={[styles.topStoriesChild, styles.topPosition]} />
      <View style={[styles.topStoriesItem, styles.topPosition]} />

      <Text style={styles.top}>Top</Text>
      <Image
        style={[styles.iconNavArrowRight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-nav-arrow-right.png")}
      />
      <Image
        style={[styles.iconFireFlame, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-fire-flame.png")}
      />

      <Text style={[styles.storyNameBy, styles.storyTypo]}>
        {story} by {author}
      </Text>
      <Text style={[styles.storyNameBy1, styles.storyTypo]}>
        {story1} by {author1}
      </Text>
      <Image
        style={[styles.topStoriesInner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/Book.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/Book.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  storyTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.materialThemeTitleSmall_size,
    top: "88.19%",
    width: "40.63%",
    height: "13.02%",
    alignItems: "center",
    display: "flex",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.materialThemeTitleSmall,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  rectangleIconLayout: {
    bottom: "14.42%",
    top: "26.98%",
    width: "33.13%",
    height: "58.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  topStoriesChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.materialThemeSysLightPrimaryFixedDim,
  },
  topStoriesItem: {
    height: "78.14%",
    top: "21.86%",
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
  },
  top: {
    height: "11.16%",
    width: "15.31%",
    top: "5.58%",
    left: "16.25%",
    fontSize: FontSize.materialThemeTitleMedium_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.materialThemeSysLightOnPrimaryContainer,
    fontFamily: FontFamily.materialThemeTitleSmall,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  iconNavArrowRight: {
    height: "8.37%",
    width: "6%",
    top: "6.98%",
    right: "8.13%",
    bottom: "84.65%",
    left: "88.75%",
  },
  iconFireFlame: {
    height: "9.3%",
    width: "5.63%",
    top: "5.87%",
    right: "88.93%",
    bottom: "84.83%",
    left: "5.44%",
  },
  storyNameBy: {
    left: "4.69%",
  },
  storyNameBy1: {
    left: "53.75%",
  },
  topStoriesInner: {
    right: "58.44%",
    left: "8.44%",
  },
  rectangleIcon: {
    right: "9.06%",
    left: "57.81%",
  },
  topStories: {
    width: 320,
    height: 230,
    marginLeft: 20,
    marginTop: 20,
  },
});

export default TopStoriesCard;
