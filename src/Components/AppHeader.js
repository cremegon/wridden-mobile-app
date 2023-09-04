import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppHeader = ({ navigation, onPress, title, icon }) => {
  return (
    <View style={styles.headerNav}>
      <TouchableOpacity
        style={{ position: "absolute", left: 25, top: 2, marginTop: 15 }}
        onPress={() => navigation.navigate(onPress)}
      >
        <Ionicons
          name={icon}
          size={26}
          color="#fd9418"
          style={{ backgroundColor: "#ffe087", padding: 5, borderRadius: 90 }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 22,
          fontFamily: "OpenSans-Bold",
          marginTop: 20,
          color: "#ffe087",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerNav: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e77f04",
    paddingBottom: 20,
    zIndex: 5,
  },
});

export default AppHeader;
