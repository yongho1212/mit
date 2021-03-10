import React from 'react';
import {Text, View, Pressable} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import styles from './styles'

import {useNavigation} from '@react-navigation/native';


const Main = (props) => {
  const navigation = useNavigation();

    return(
        <View style={{width: '100%', height: '100%'}}>
          
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps

          region={{
            latitude: 37.36169446014372,
            longitude: 127.119963242058,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <View>
            <Pressable 
            style={styles.locationSearchBtn}
            onPress={() => navigation.navigate('LocationSearch')}
            >
              
              <Text style={styles.locationSearchText}>Location info</Text>
            </Pressable>
          </View>
        </MapView>
      </View>
    );
};


export default Main;
