import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppHeader = ({ navigation, onPress, title, icon }) => {
  return (
    <View style={styles.headerNav}>
      <TouchableOpacity
        style={{ position: "absolute", left: 25 }}
        onPress={() => navigation.navigate(onPress)}
      >
        <Ionicons name={icon} size={26} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerNav: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default AppHeader;
