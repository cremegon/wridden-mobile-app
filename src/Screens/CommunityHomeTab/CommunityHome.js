import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const CommunityHome = ({ navigation }) => {
  return (
    <SafeAreaView>
      <AppHeader title={"Community"} navigation={navigation} />
    </SafeAreaView>
  );
};

export default CommunityHome;
