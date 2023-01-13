import React,{useState,useEffect} from "react";
import { View,StyleSheet,Image,Text } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from './metrics'
import { useSelector } from 'react-redux'; 

const MarkerCard = (props) => {

    const theme = useSelector(state => state.theme);
    const [mode, setMode] = useState(theme.mode);
    
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);
    
    return(
        <View style={mode=='light'?styles.mainCardView_light:styles.mainCardView_dark}>
            <View style={styles.customImage}>
                <Image
                 source={props.props.image}
                style = {styles.customImage}
                />
            </View>
            <View style={styles.customCol}>
                <Text style={mode=='light'?styles.title_light:styles.title_dark}>{props.props.name}</Text>
                <Text style={styles.subtitle}>{props.props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    customImage: {
        borderRadius: 15,
        height:verticalScale(80),
        width:horizontalScale(80),
        marginRight:10
    },
    customCol: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title_light:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:15,
        color:'lightgrey',
    },
    title_dark:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    
    mainCardView_light: {
        alignContent:'center',
        alignItems: 'center',
        margin:20,
        paddingHorizontal:horizontalScale(10),
        height: verticalScale(100),
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    mainCardView_dark: {
        alignContent:'center',
        alignItems: 'center',
        margin:20,
        paddingHorizontal:horizontalScale(10),
        height: verticalScale(100),
        backgroundColor: '#454445',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
  });
  

export default MarkerCard;