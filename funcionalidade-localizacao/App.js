import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

  const [origin, setOrigin] = useState({ initialState: { } });
  const [destination, setDestination] = useState({ initialState: { } });

  return (
    <View style={styles.container}>

      <MapView style={styles.map}
        initialRegion={{
          latitude: -23.5422,
          longitude: -46.6304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    backgroundColor: '#9facc2',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})