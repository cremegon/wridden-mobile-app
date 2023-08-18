import { Text, View, StyleSheet } from "react-native";
import {
  Canvas,
  useTouchHandler,
  Skia,
  SkPath,
  Path,
  PaintStyle,
  SkPaint,
  SkiaView,
  useDrawCallback,
  SkCanvas,
} from "@shopify/react-native-skia";
import { useRef, useState, Children } from "react";
import Slider from "@react-native-community/slider";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPath {
  path: SkPath;
  paint: SkPaint;
}

const painting = () => {
  const paint = Skia.Paint()
  paint.setStyle(PaintStyle.Stroke)
  paint.setStrokeWidth(4)
  paint.setColor(Skia.Color("blue"))
  return paint;
}

export default function DrawCharacter() {
  const canvasRef = useRef<SkCanvas |null>(null);
  const currentPath = useRef < SkPath | null >(null);
  const [paths, setPaths] = useState < IPath[] > ([]);
  const [slider, setSlider] = useState(0)
  const onTouch = useTouchHandler({
    onStart: ({ x, y }) => {
      currentPath.current = Skia.Path.Make();
      currentPath.current.moveTo(x, y);
    },
    onActive: ({ x, y }) => {
      currentPath.current?.lineTo(x, y);
      canvasRef.current?.drawPath(currentPath.current!, painting())
    },
    onEnd: () => {
      setPaths(values => values.concat({
        path: currentPath.current!,
        paint: painting(),
      }));
      currentPath.current = null
    }
  });

  const onDraw = useDrawCallback((canvas, info) => {
    onTouch(info.touches)
    canvasRef.current = canvas;
  }, [])
  return (
<View style = {styles.safecontain}>
      <Canvas style = {styles.canvas} onTouch={onTouch}>
        {Children.toArray(paths.map((value) => (
        <Path path={value.path} style={"stroke"} 
      strokeWidth={4}/>
        )))}
        </Canvas>
    <SkiaView style = {styles.container} onDraw={onDraw} />
    <Text style = {{paddingBottom: 50}}>Hello, World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
  canvas: {
    width: "80%",
    height: "60%",
    position: "absolute",
    borderWidth: 3,
    borderColor: "red"
  }, 
  safecontain: {
    marginTop: 50,
    flex: 1,
    alignItems: "center"
  }
});
