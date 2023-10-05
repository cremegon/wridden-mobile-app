import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  event,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ArcGraph = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, SCREEN_HEIGHT / 3);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 6) {
        translateY.value = withSpring(SCREEN_HEIGHT / 3);
      } else if (translateY.value < SCREEN_HEIGHT / 5) {
        translateY.value = withSpring(SCREEN_HEIGHT / 10);
      }
    });

  useEffect(() => {
    translateY.value = withSpring(SCREEN_HEIGHT / 10);
  }, []);

  const rTopSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.topSheet, rTopSheetStyle]}>
        <SafeAreaView style={styles.defaultText}>
          <Image
            source={require("../assets/stories/arcgraph.png")}
            resizeMode="contain"
            style={{
              width: 420,
              top: SCREEN_HEIGHT / 1.65,
              borderWidth: 4,
              height: 350,
            }}
          />
        </SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  topSheet: {
    backgroundColor: "#ffa951",
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    bottom: SCREEN_HEIGHT,
    borderRadius: 25,
    zIndex: 1,
  },
  defaultText: {
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },
  line: {
    backgroundColor: "white",
    height: 4,
    borderRadius: 30,
    width: 200,
    alignSelf: "center",
  },
});

export default ArcGraph;
