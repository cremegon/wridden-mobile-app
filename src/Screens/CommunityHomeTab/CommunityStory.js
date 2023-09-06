import { View, Text } from "react-native";
import React from "react";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const CommunityStory = () => {
  return (
    <SafeAreaView>
      <AppHeader title={"Stories"} icon={"chevron-back"} />
    </SafeAreaView>
  );
};

export default CommunityStory;
