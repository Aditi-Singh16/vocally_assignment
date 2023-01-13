import React,{useState,useEffect} from "react";
import { StyleSheet, TextInput, View, Keyboard} from "react-native";
import {Icon} from 'react-native-elements';
import { useSelector } from 'react-redux'; 


const SearchBar = (props) => {

  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  
  useEffect(() => { 
    setMode(theme.mode);
  }, [theme]);

  return (
      <View
        style={
          mode=='light'?
          styles.searchBar
          :
          styles.searchBar_dark
        }
      >
        <Icon color={'#5a5b5b'} name={"search"} type={'material'} size={20} ></Icon>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          placeholderTextColor={'#5a5b5b'}
          
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
          
        />
        {props.clicked && (
          <Icon  name={"close"} type={'material-community'} size={20}  onPress={() => {
            props.setSearchPhrase("");
            Keyboard.dismiss();
              props.setClicked(false);
        }}></Icon>
        )}
        </View>
        
        
      </View>
      

  );
};

const styles = StyleSheet.create({
  
    searchBar: {
      position:'relative',
      top: 10,
      alignSelf:'center',
      paddingHorizontal:10,
      flexDirection: "row",
      justifyContent:"center",
      width: "90%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
    },
    searchBar_dark:{
      position:'relative',
      top: 10,
      alignSelf:'center',
      paddingHorizontal:10,
      flexDirection: "row",
      justifyContent:"center",
      width: "90%",
      backgroundColor: '#454445',
      borderRadius: 15,
      alignItems: "center",
    },
    input: {
      fontSize: 15,
      width: "90%",
      flex:1,
      color: 'black'
    },
    inputContainer: {
      flex:1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
    },
  });


export default SearchBar;

