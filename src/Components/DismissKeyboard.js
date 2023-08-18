import { View, Text, Keyboard } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
