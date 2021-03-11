import React, {Component} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import styles from './styles'

import {useNavigation} from '@react-navigation/native';

const latitudeDelta = 0.015
const longitudeDelta = 0.0121


export default class Main extends Component{

  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 37.36169446014372,
      longitude: 127.119963242058,
    }
  };

  onChangeValue = region => {
    this.setState({
      region
    });
  };

    render(){
    return(
      
        <View style={{width: '100%', height: '100%'}}>
          
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          initialRegion={this.state.region}
          onRegionChangeComplete = {this.onChangeValue}
          
          
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
        <View style={{top:'50%', left:'50%', marginLeft:-24, marginTop:-48, position:'absolute'}}>
          <Image style={{height:30, width:30}} source={{uri:'https://cdn2.iconfinder.com/data/icons/interface-elements-2/512/pin_map_check_pins-512.png'}} />
        </View>
      </View>
    );
}
}
