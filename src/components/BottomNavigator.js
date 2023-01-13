import React,{useState,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { horizontalScale, moderateScale, verticalScale } from './metrics'
import { useSelector } from 'react-redux'; 


const BottomNavigator = () => {

    const theme = useSelector(state => state.theme);
    const [mode, setMode] = useState(theme.mode);
    
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    return(  
        <View style={mode=='light'?Style.bottomnavbar_light:Style.bottomnavbar_dark}>
            <TouchableOpacity style={Style.item}>
                <Icon color={mode=='dark'?'white':'black'} name={"explore"} type={'material'} size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={Style.item}>
                <Icon color={mode=='dark'?'white':'black'} name={"map"} type={'material'} size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={Style.floatingButton}>
                <Icon name={"add"} color={"#f6373e"} type={'material'} size={30} containerStyle={{alignSelf:'center'}} reverse></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={Style.item}>
                <Icon color={mode=='dark'?'white':'black'} name={"notifications"} type={'material'} size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={Style.item}>
                <Icon color={mode=='dark'?'white':'black'} name={"account-outline"} type={'material-community'} size={30}></Icon>
            </TouchableOpacity>
        </View>
    );
}

const Style = StyleSheet.create({
    bottomnavbar_light:{
        backgroundColor:'white',
        width:'100%',
        height:verticalScale(60),
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal:0,
    },
    bottomnavbar_dark:{
        backgroundColor:'#000000',
        width:'100%',
        height:verticalScale(60),
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal:0,
    },
    item: {
        alignItems:'center',
        justifyContent: 'center'
    },
    container:{
        height:60,
        justifyContent: 'flex-end',
    },
    floatingButton:{
        paddingHorizontal:horizontalScale(30),
        alignSelf:'center',
        width:horizontalScale(70),
        height:verticalScale(70),
        borderRadius:moderateScale(25),
        zIndex:10,
        bottom:verticalScale(30)
    }
}) 

export default BottomNavigator;
