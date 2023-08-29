import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CommunityButton = ({ title, navigation, link }) => {
  return (
    <Pressable onPress={() => navigation.navigate(link)}>
      <View style={styles.communityButton}>
        <View style={styles.communityButtonChild} />
        <Text style={styles.text}>{title}</Text>
        <Image
          style={styles.iconNavArrowRight}
          contentFit="cover"
          source={require("../assets/-icon-nav-arrow-right.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  communityButtonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
    position: "absolute",
  },
  text: {
    height: "50%",
    width: "47.32%",
    top: "25%",
    left: "7.72%",
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeTitleSmall,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  iconNavArrowRight: {
    height: "37.5%",
    width: "5.7%",
    top: "31.25%",
    right: "8.13%",
    bottom: "31.25%",
    left: "88.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  communityButton: {
    width: 320,
    height: 48,
    margin: 24,
  },
});

export default CommunityButton;
