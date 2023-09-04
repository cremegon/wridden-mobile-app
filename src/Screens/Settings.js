import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../Components/AppHeader";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsPage = ({ navigation }) => {
  const changeFont = () => {
    console.log("Change Font");
  };

  const changeMode = () => {
    console.log("Change Mode");
  };

  const changeBg = () => {
    console.log("Change Background");
  };

  const changeNotification = () => {
    console.log("Change Notification");
  };

  const changeSupport = () => {
    console.log("Change Support");
  };
  const settingItems = [
    { icon: "text", text: "Change Font", action: changeFont },
    { icon: "color-palette", text: "Custom Background", action: changeBg },
    {
      icon: "notifications",
      text: "Notifications",
      action: changeNotification,
    },
    { icon: "help-buoy", text: "Help & Support", action: changeSupport },
    {
      icon: "information-circle-outline",
      text: "Terms & Conditions",
      action: changeSupport,
    },
    { icon: "log-out", text: "Logout", action: changeSupport },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity onPress={action}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          paddingLeft: 20,
          marginHorizontal: 10,
          backgroundColor: "white",
          borderRadius: 30,
          marginVertical: 4,
          width: 380,
          elevation: 3,
        }}
      >
        <Ionicons
          name={icon}
          size={24}
          color="#ffa951"
          style={{
            padding: 10,
            backgroundColor: "#ffe087",
            borderRadius: 90,
          }}
        />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 18,
            marginTop: 8,
            fontFamily: "Nunito-ExtraBold",
            alignItems: "center",
          }}
        >
          {text}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#fd9418"
          style={{ marginLeft: "auto", marginRight: 20, alignSelf: "center" }}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={{
        paddingTop: 10,
        backgroundColor: "rgba(226,237,236,0.4)",
        flex: 1,
      }}
    >
      <AppHeader
        title={"Settings"}
        onPress={"Profile"}
        icon={"chevron-back"}
        navigation={navigation}
      />

      <View style={{ marginTop: 20, borderRadius: 20 }}>
        <View style={{ alignItems: "center" }}>
          {settingItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
