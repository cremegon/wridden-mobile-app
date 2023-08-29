import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { profileImagesURL } from "../assets/images";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../Components/AppHeader";

export default Profile = ({ navigation }) => {
  nav = useNavigation();
  const [selectedImage, setSelectedImage] = useState(profileImagesURL[0]);
  const [bio, SetBio] = useState("Hello, I eat cheese");
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        navigation={navigation}
        onPress={"Settings"}
        title="Profile"
        icon={"settings"}
      />

      <ScrollView>
        {/* Profile Image Selection */}
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <View
            style={{
              backgroundColor: "black",
              width: "100%",
              height: 200,
              position: "absolute",
              top: 0,
              zIndex: -2,
            }}
          />
          <View
            style={{
              width: 168,
              height: 168,
              backgroundColor: "pink",
              borderRadius: 90,
              position: "absolute",
              bottom: -9,
            }}
          />
          <View
            style={{
              width: 160,
              height: 160,
              backgroundColor: "black",
              opacity: 0.5,
              borderRadius: 90,
              position: "absolute",
              bottom: -5,
            }}
          />
          <Image
            source={{
              uri: selectedImage,
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 90,
              marginTop: 120,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 5,
              right: "32%",
              zIndex: 2,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 85,
            }}
          >
            <TouchableOpacity onPress={handleImageSelection}>
              <Ionicons name="camera" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Details Section*/}

        <View>
          <Text style={styles.details}>Hussain Ahmed Shaikh</Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontStyle: "italic",
              paddingTop: 5,
            }}
          >
            Pakistan
          </Text>

          {/* Numerics and Extras*/}
          <View style={styles.numericBox}>
            <View style={{ marginLeft: 30, alignItems: "center" }}>
              <Text style={styles.numericNumber}>20</Text>
              <Text>Reads</Text>
            </View>
            <View style={{ marginLeft: 30, alignItems: "center" }}>
              <Text style={styles.numericNumber}>47</Text>
              <Text>Follows</Text>
            </View>
            <View style={{ marginLeft: 30, alignItems: "center" }}>
              <Text style={styles.numericNumber}>92</Text>
              <Text>Following</Text>
            </View>
          </View>

          <View style={styles.bioWindow}>
            <TextInput
              value={bio}
              onChangeText={(val) => SetBio(val)}
              editable={true}
              style={styles.bio}
              multiline={true}
              textAlign="center"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  headerNav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  details: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    paddingTop: 15,
  },
  bio: {
    fontSize: 18,
    fontStyle: "italic",
  },
  bioWindow: {
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 80,
    borderRadius: 16,
    padding: 20,
    backgroundColor: "pink",
  },
  numericBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  numericNumber: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
});
