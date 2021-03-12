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
    },
    parseLat: null,
    parseLong: null,
  };

  onChangeValue = region => {
    this.setState({
      region
    });
    console.warn(this.state.region);
    var test = JSON.stringify(this.state.region);
    console.log(JSON.parse(test).latitude);
    this.regionChange(JSON.parse(test));
  };
  
  regionChange = (data) => {
    this.setState({
      parseLong: data.latitude,
      parseLat: data.longitude
    })
  }
  
    render(){
      
      
    return(
      
        <View style={{width: '100%', height: '100%'}}>
          
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          initialRegion={this.state.region}
          onRegionChangeComplete = {this.onChangeValue}
          showsMyLocationButton = {true}
          showsUserLocation = {true}
        >
        
          <View>
            <Pressable
            onPress={() => this.props.navigation.navigate('LocationSearch')}
            style={styles.locationSearchBtn}
            >
              <Text>{this.state.parseLat}</Text>
              <Text>{this.state.parseLong}</Text>
            </Pressable>  
          </View>
          <Marker coordinate={this.state.region}   /> 
      {/* this.state.region의 값을 이용하여 현위치와 버튼 텍스트(geocoding) 연동? */}
        </MapView>

      </View>
    );
}
}
