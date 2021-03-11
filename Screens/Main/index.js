import React, {Component} from 'react';
import {Text, View, Pressable, Image, Button} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
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
            onPress={() => this.props.navigation.navigate('LocationSearch')}
            style={styles.locationSearchBtn}
            
            />
          </View>
          <Marker coordinate={this.state.region}   />
        </MapView>

      </View>
    );
}
}
