import { View, Text, StyleSheet, 
  Dimensions, GestureResponderEvent, 
  TouchableOpacity, 
  Button} from 'react-native'
import React, { useState } from 'react'
import { Svg, Path } from 'react-native-svg'
import Buttons from './Buttons';

const {height, width} = Dimensions.get("window");

const DrawingCharacter2 = () =>  {

  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [paths, setPaths] = useState([])
  const [ClearClicked, setClearClicked] = useState(false)

  const handleClearClick = () => {
    setPaths([])
    setCurrentPath([])
    setClearClicked(true)
  }

  const warnLog = () => {
    console.warn("working")
  }

  const titles = [{
    key: 1,
    title: "Clear",
    function: handleClearClick
  },
  {
    key: 2,
    title: "Erase",
    function: handleClearClick
  },
  {
    key: 3,
    title: "Next",
    function: handleClearClick
  },
]

  const onTouchMove = (event: GestureResponderEvent) => {
    const newPath = [...currentPath];

    //get current user touches position
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;

    // create new point
    const newPoint = `${newPath.length === 0 ? "M" : ""}
    ${locationX.toFixed(
      0
    )},${locationY.toFixed(0)} `;

    // add the point to older points
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };
  const onTouchEnd = () => {
    //push new path with old path and clean current path state
    paths.push(currentPath);
    setCurrentPath([]);
    setClearClicked(false)
  };


      return( 
      <View
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={styles.container}
      >
        <Svg style = {styles.svgContainer}>
          <Path
            d={paths.join("")}
            stroke={"red"}
            fill={"transparent"}
            strokeWidth={3}
            strokeLinejoin={"round"}
            strokeLinecap={"round"}
          />

          {paths.length > 0 &&
            paths.map((item, index) => (
              <Path
                key={`path-${index}`}
                d={currentPath.join("")}
                stroke={"red"}
                fill={"transparent"}
                strokeWidth={3}
                strokeLinejoin={"round"}
                strokeLinecap={"round"}
              />
            ))}
        </Svg>
        <View style = {styles.buttonList}>

          {titles.map((titles) => (
            <Buttons onPress = {titles.function} title={titles.title} key={titles.key}/>
          ))}

        </View>
      </View>
      )
}

export default DrawingCharacter2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    svgContainer: {
        height: "70%",
        width: "100%",
        borderColor: "black",
        backgroundColor: "white",
        borderWidth: 1
    },
    clearButton: {
      marginTop: 10,
      backgroundColor: "black",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5
    },
    clearButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold"
    },
    buttonList: {
      flexDirection: 'row',
    },
})