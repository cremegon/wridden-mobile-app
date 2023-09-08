import { View, Text, StyleSheet, 
  Dimensions, GestureResponderEvent, 
  TouchableOpacity, 
  Button, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Svg, Path } from 'react-native-svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BrandButtonAlt } from './BrandButtonAlt';

const {height, width} = Dimensions.get("window");

const DrawingCharacter2 = ({navigation}) =>  {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [paths, setPaths] = useState([])
  const [ClearClicked, setClearClicked] = useState(false)
  const [name, setName] = useState("")

  const handleClearClick = () => {
    setPaths([])
    setCurrentPath([])
    setClearClicked(true)
  }

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
      <SafeAreaView
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

        <TextInput placeholder='Enter Character Name' style = 
        {{marginTop: 20, borderWidth: 2, 
        borderColor: "white", borderRadius: 30, 
        paddingHorizontal: 20, paddingVertical: 10, 
        fontFamily: "OpenSans-Italic", fontSize: 16, 
        textAlign: "center", backgroundColor: "white", elevation: 2}} 
        onChangeText={(val) => setName(val)} 
        placeholderTextColor={"grey"}/>

        <View style = {styles.buttonList}>
          <BrandButtonAlt title={"Next"} link={"Character Traits"} navigation={navigation} params={name} onButtonPress={console.log("Hi")}/>
        </View>
      </SafeAreaView>
      )
}

export default DrawingCharacter2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        
    },
    svgContainer: {
        height: "70%",
        width: "100%",
        backgroundColor: "white",
        
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