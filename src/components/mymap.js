import React, { useState,useEffect } from "react";
import { View,StyleSheet,Dimensions } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Search from './search';
import data from "./data";
import CustomMarker from "./customMarker";
import MarkerCard from "./markerCard";
import { horizontalScale, moderateScale, verticalScale } from './metrics'
import { useSelector, useDispatch } from 'react-redux'; 
import Toggle from "./toggle"
import mapStyle from "./mapStyle";


function MyMap(){

    const theme = useSelector(state => state.theme);
    const [mode, setMode] = useState(theme.mode);
    const [showCard,setShowCard] = useState(false);
    const [cardIndex,setCardIndex] = useState(0);

    
    
    const markerClick = (e,param) => {
        e.stopPropagation();
        setCardIndex(param)
        setShowCard(true)
    }

    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    return(
        <View style={styles.body}>

            <MapView style={styles.map}
                customMapStyle={mode=='light'?[]:mapStyle}
                initialRegion={{
                    latitude:37.83871603198752, 
                    longitude:-122.27574944710301,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                
            >
                {
                data.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.name}
                        description={""}
                        onPress={(e)=>markerClick(e,index)}
                    >
                        {
                            showCard?
                            <CustomMarker image={marker.icon} props={cardIndex==index? true:false} />
                            :
                            <CustomMarker image={marker.icon} props={false} />
                        }
                    </Marker>
                ))}
            </MapView>
            <View style={styles.searchBarStyle}>
            <Search/>
            </View>
            {
                showCard?
                <View style={styles.markerCardStyle}>
                <MarkerCard props={data[cardIndex]}/>
            </View>
            :
            <View></View>
            }
            <View style={styles.toggleStyle}>
                <Toggle/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        alignItems: "center"
    },
    map:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    searchBarStyle:{
        position: 'absolute', 
        top: verticalScale(10), 
        width: '100%'
    },
    markerCardStyle:{
        position: 'absolute', 
        bottom:verticalScale(10),
        width: '100%'
    },
    toggleStyle:{
        position: 'absolute', 
        right:horizontalScale(10), 
        top: verticalScale(100),
        
    }

})

export default MyMap;