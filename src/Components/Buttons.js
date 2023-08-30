import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Buttons = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.clearButton} onPress={onPress}>
        <Text style={styles.clearButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 10,
    backgroundColor: "pink",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  clearButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "palevioletred",
  },
});

export default Buttons;
