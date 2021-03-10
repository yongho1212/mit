import React from 'react';
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './suggestionRow';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch = (props) => {

  return (
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{
        textInput: styles.textInput,
      }}
      query={{
        key: 'AIzaSyDH3imine2M042LWRN1mEr24bpU7iS4dmQ',
        language: 'en',
      }}

    />
    </View>
  );
};

export default LocationSearch;