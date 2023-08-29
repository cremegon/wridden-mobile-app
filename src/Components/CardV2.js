import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const CardV2 = ({ title, link, navigation }) => {
  return (
    <SafeAreaView style={styles.creationButton}>
      <Pressable
        style={[styles.property1idle, styles.pressedLayout]}
        onPress={() => navigation.navigate(link)}
      >
        <View style={[styles.property1idleChild, styles.childPosition]} />
        <Text style={[styles.text, styles.textTypo]}>{title}</Text>
        <Image
          style={[styles.iconPlus, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-plus.png")}
        />
        <Image
          style={[styles.iconNavArrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-nav-arrow-right.png")}
        />
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pressedLayout: {
    height: 50,
    width: 300,
    borderRadius: Border.br_xs,
    left: 20,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  textTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.materialThemeTitleMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.materialThemeTitleMedium_size,
    left: "30.54%",
    top: "30%",
    width: "47.32%",
    height: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "31.25%",
    top: "31.25%",
    height: "37.5%",
    position: "absolute",
    overflow: "hidden",
  },
  property1idleChild: {
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
  },
  text: {
    color: Color.materialThemeSysLightOnPrimaryContainer,
  },
  iconPlus: {
    width: "6.04%",
    right: "87.58%",
    left: "6.38%",
  },
  iconNavArrowRight: {
    width: "6.3%",
    right: "8.05%",
    left: "88.59%",
  },
  property1idle: {
    top: 20,
  },
  pressedChild: {
    backgroundColor: Color.materialThemeSysLightPrimaryFixedDim,
  },
  text1: {
    color: Color.materialThemeSysLightOnPrimaryFixedVariant,
  },
  pressed: {
    top: 88,
  },
  creationButton: {
    width: 340,
    height: 155,
    overflow: "hidden",
  },
});

export default CardV2;
