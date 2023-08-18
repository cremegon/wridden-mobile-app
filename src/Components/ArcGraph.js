import { View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

export const ArcGraph = () => {
  const translateY = new Animated.Value(0);

  function handleGesture(event) {
    const positionY = event.nativeEvent.translationY;

    // Update the translateY value to move the drawer
    translateY.setValue(positionY);
  }

  function handleStateChange(event) {
    if (event.nativeEvent.state === State.END) {
      // Determine whether to open or close the drawer based on translateY value
      const openThreshold = -200; // Adjust as needed
      const isOpen = translateY.value < openThreshold;

      // Perform animation to snap to open or close position
      Animated.timing(translateY, {
        toValue: isOpen ? -300 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={handleStateChange}
      >
        <Animated.View
          style={{
            transform: [{ translateY }],
          }}
        >
          <Text> TopDrawer Container</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
