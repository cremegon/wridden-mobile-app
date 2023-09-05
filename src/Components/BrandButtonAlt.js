import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export const BrandButtonAlt = ({
  navigation,
  link,
  title,
  params,
  onButtonPress,
}) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Pressable
        onPress={() => {
          onButtonPress
            ? onButtonPress()
            : navigation.navigate(link, { paramKey: params });
        }}
      >
        <Text style={styles.button}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "rgba(253, 148, 24, 1)",
    width: 150,
    height: 45,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 30,
    fontSize: 20,
    fontFamily: "Nunito-ExtraBold",
    color: "floralwhite",
    marginHorizontal: 10,
  },
});
