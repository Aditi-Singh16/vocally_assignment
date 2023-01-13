import React,{ useEffect, useState }  from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'; 
import { switchMode } from '../../reduxStore/actions'
import { horizontalScale, moderateScale, verticalScale } from './metrics'

const Toggle = () => {

    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [mode, setMode] = useState(theme.mode);
    const handleThemeChange = (e) => { 
        e.stopPropagation();
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }
    
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    return(  
        <View style={Style.container}>
            <View>
                <TouchableOpacity
                style={mode=='dark'?Style.roundShape_dark:Style.roundShape_light}
                    onPress={(e) =>{handleThemeChange(e)}}
                >
                    <Icon
                        name={'tune'} type={'material'} size={20} 
                        color={mode=='dark'?'white':'black'}
                        />
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                style={mode=='dark'?Style.roundShape_dark:Style.roundShape_light}
                    >
                        <Icon
                        name={'near-me'} type={'material'} size={20} 
                        color={mode=='dark'?'white':'black'}
                        />
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    container:{
        width:horizontalScale(50),
        height:verticalScale(120),
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingHorizontal:0,
    },
    roundShape_dark:{
        justifyContent: 'center',
        alignItems: 'center',
        width:horizontalScale(50),
        height:verticalScale(50),
        backgroundColor: '#454445',
        borderRadius: moderateScale(100),
        
    },
    roundShape_light:{
        justifyContent: 'center',
        alignItems: 'center',
        width:horizontalScale(50),
        height:verticalScale(50),
        backgroundColor: 'white',
        borderRadius: moderateScale(100),
    },
    
}) 

export default Toggle;
