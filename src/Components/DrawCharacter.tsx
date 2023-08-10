import { Text, View, StyleSheet } from "react-native";
import {
  Canvas,
  useTouchHandler,
  Skia,
  SkPath,
  Path,
} from "@shopify/react-native-skia";
import { useRef, useState, Children } from "react";

export default function DrawCharacter() {
  const currentPath = useRef < SkPath | null >(null);
  const [paths, setPaths] = useState < SkPath[] > ([]);
  const onTouch = useTouchHandler({
    onStart: ({ x, y }) => {
      currentPath.current = Skia.Path.Make();
      currentPath.current.moveTo(x, y);
    },
    onActive: ({ x, y }) => {
      currentPath.current?.lineTo(x, y);
    },
    onEnd: () => {
      setPaths(values => values.concat(currentPath.current!));
      currentPath.current = null;
    }
  });
  return (
  
      <Canvas style = {styles.container} onTouch={onTouch}>
        {Children.toArray(paths.map((path) => (
        <Path path={path} style="stroke" strokeWidth={4}/>
        )))}
        </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
