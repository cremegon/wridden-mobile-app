import { View, Text } from "react-native";
import React from "react";

const ArcGraph = () => {
<<<<<<< Updated upstream
=======
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      console.log(translateY.value);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, SCREEN_HEIGHT / 3);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 4) {
        translateY.value = withSpring(SCREEN_HEIGHT / 3);
      } else if (translateY.value < SCREEN_HEIGHT / 4) {
        translateY.value = withSpring(SCREEN_HEIGHT / 6);
      }
    });

  useEffect(() => {
    translateY.value = withSpring(SCREEN_HEIGHT / 6);
  }, []);

  const rTopSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
>>>>>>> Stashed changes
  return (
    <View>
      <Text>ArcGraph</Text>
    </View>
  );
};

export default ArcGraph;
