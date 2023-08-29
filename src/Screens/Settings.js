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
    { icon: "sunny", text: "Dark Mode", action: changeMode },
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
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        paddingVertical: 8,
        paddingLeft: 20,
        marginHorizontal: 10,
      }}
    >
      <Ionicons name={icon} size={24} color="black" />
      <Text style={{ marginLeft: 36, fontSize: 16 }}>{text}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ paddingTop: 10 }}>
      <AppHeader
        title={"Settings"}
        onPress={"Profile"}
        icon={"chevron-back"}
        navigation={navigation}
      />

      <View style={{ marginTop: 20, borderRadius: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 15,
            marginBottom: 15,
          }}
        >
          Account
        </Text>
        <View>
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
