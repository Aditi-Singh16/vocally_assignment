// Home.js
import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
} from "react-native";

import List from "./list";
import SearchBar from "./search_bar";
import data from "./data";

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);


  return (
    <SafeAreaView>
    <View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {
        searchPhrase==""?
        <View></View>
        : 
        <List
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
          />
      }
    </View>
    </SafeAreaView>
  );
};


export default Search;

