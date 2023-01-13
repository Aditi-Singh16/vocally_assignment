import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from './metrics'
import { useSelector } from 'react-redux'; 



const Item = ({ name,theme}) => (
  
  <View style={styles.item}>
    <Text style={theme=="light" ?styles.title_light:styles.title_dark}>{name}</Text>
  </View>
);


const List = (props) => {

  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  
  useEffect(() => { 
      setMode(theme.mode);
  }, [theme]);
  
  
  const renderItem = ({ item }) => {
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} theme={mode}/>;
    }
  };

  return (
    <SafeAreaView style={mode=='light'?styles.listContainerLight:styles.listContainerDark}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainerLight: {
    height: 'auto',
    alignSelf:'center',
    flexDirection:'row',
    width: "90%",
    backgroundColor:"#fefffe",
    borderRadius: moderateScale(15),
    marginHorizontal:horizontalScale(10),
    padding:10
  },
  listContainerDark: {
    height: 'auto',
    alignSelf:'center',
    flexDirection:'row',
    width: "90%",
    backgroundColor:'#252524',
    borderRadius: moderateScale(15),
    marginHorizontal:horizontalScale(10),
    padding:10
  },
  item: {
    borderBottomColor: "lightgrey"
  },
  title_light: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5),
    color:'grey',
  },
  title_dark: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5),
    color:'white',
  },
});

export default List;

