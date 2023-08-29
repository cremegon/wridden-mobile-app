import * as React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchBarChild} />
      <Image
        style={styles.iconSearch}
        contentFit="cover"
        source={require("../assets/-icon-search.png")}
      />
      <TextInput
        placeholder="Search"
        textAlign="left"
        onChangeText={(val) => setId(val)}
        style={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarChild: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.materialThemeSysLightPrimaryContainer,
    position: "absolute",
  },
  iconSearch: {
    height: "50%",
    width: "6.25%",
    top: "25.82%",
    right: "89.71%",
    bottom: "24.18%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  text: {
    top: "15%",
    left: "15.25%",
    fontSize: FontSize.materialThemeTitleMedium_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.materialThemeTitleSmall,
    color: Color.materialThemeSysLightOnPrimaryContainer,
    textAlign: "left",
    position: "absolute",
  },
  searchBar: {
    width: 340,
    height: 40,
    margin: 20,
  },
});

export default SearchBar;
