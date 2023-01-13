import React,{useState,useEffect} from "react";
import { View,StyleSheet,Image } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from './metrics'
import { useSelector } from 'react-redux'; 

function CustomMarker(image) {

  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
    
  useEffect(() => { 
      setMode(theme.mode);
  }, [theme]);

  
  if(image["props"]==true){
    return (

      <View style={mode=='light'?styles.containerlarge_light:styles.containerlarge_dark}>
      <Image style={styles.image} source={image["image"]} resizeMode={"cover"}></Image>
    </View>
      );
  }else{
    return (

    <View style={mode=='light'?styles.container_light:styles.container_dark}>
    <Image style={styles.image} source={image.image} resizeMode={"cover"}></Image>
  </View>
    );
}
    
}
  

  const styles = StyleSheet.create({
    container_light:{
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(200),
      backgroundColor: 'white'
    },
    container_dark:{
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(75),
      backgroundColor: '#454445',
    },
    containerlarge_light:{
      width: horizontalScale(40),
      height: verticalScale(40),
      borderColor: 'black',
      borderWidth: horizontalScale(2),
      borderRadius: moderateScale(100),
      backgroundColor: 'white',
      zIndex:10
    },
    containerlarge_dark:{
      width: horizontalScale(40),
      height: verticalScale(40),
      borderColor: 'white',
      borderWidth: horizontalScale(2),
      borderRadius: moderateScale(75),
      backgroundColor: '#454445',
    },
    image: {
        width:horizontalScale(30),
        height:verticalScale(30),
        alignSelf:'center',
      },
  });


export default CustomMarker;