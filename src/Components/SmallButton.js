import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SmallButton = ({ title }) => {
  return (
    <View style={styles.smallButton}>
      <View style={[styles.smallButtonChild, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    position: "absolute",
  },
  smallButtonChild: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.materialThemeSysLightPrimary,
  },
  text: {
    left: "10%",
    top: -2,
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.materialThemeTitleLarge,
    color: Color.materialThemeBlack,
    textAlign: "center",
  },
  smallButton: {
    width: 100,
    height: 24,
  },
});

export default SmallButton;
