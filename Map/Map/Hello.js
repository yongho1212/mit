import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TopBar, BottomSheet, CustomMarker   } from '../Components';
import { MARKERS_DATA } from '../data/markers';
import { useMap } from './useMap';
import mapStyle from './mapstyle';

export function Hello() {
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();


    return (
        <View style={styles.container}>
          <TopBar onPressElement={handelResetInitialPosition} />
          <MapView
            customMapStyle={mapStyle}
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            initialRegion={{
              latitude: 41.3995345,
              longitude: 2.1909796,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            mapType="standard"
          ></MapView>
          <BottomSheet onPressElement={handleNavigateToPoint} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});
export default Hello;