import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Buttons = ({ title, onPress }) => {
  return (
    <View style={styles.spacing}>
      <TouchableOpacity style={styles.clearButton} onPress={onPress}>
        <Text style={styles.clearButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 10,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  spacing: {
    padding: 10,
  },
});

export default Buttons;
