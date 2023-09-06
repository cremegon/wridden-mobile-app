import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const StorySection = ({ content, title, onEdit }) => {
  return (
    <View>
      <TextInput
        style={styles.heading}
        value={title}
        onChangeText={(e) => onEdit("title", e)}
        placeholder="Section Heading"
        multiline={true}
        enablesReturnKeyAutomatically
        placeholderTextColor={"lightgrey"}
      />
      <TextInput
        style={styles.notes}
        value={content}
        onChangeText={(e) => onEdit("content", e)}
        placeholder="Begin Writing ..."
        multiline={true}
        enablesReturnKeyAutomatically
        placeholderTextColor={"lightgrey"}
      />
    </View>
  );
};

const styles = StyleSheet({
  heading: {
    fontSize: 24,
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: "semibold",
  },
  notes: {
    fontSize: 18,
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    textAlignVertical: "top",
    flex: 1,
    marginBottom: 70,
  },
});
