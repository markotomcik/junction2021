import HMSMap, { HMSMarker, MapTypes } from "@hmscore/react-native-hms-map";
import React, { useEffect } from 'react';
import {
  SafeAreaView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkersAction } from '../actions'

export const Map = () => {

  const dispatch = useDispatch();
  const markers = useSelector( state => state.markers );

  useEffect(() => {
    
    if(!markers){dispatch(getMarkersAction(49, 21, 10))}
  })

  return (
    <SafeAreaView>
      <HMSMap
        mapType={MapTypes.NORMAL}
        style={{ height: "100%" }}
        camera={{ target: { latitude: 49.05498690478469, longitude: 20.300363581972807 }, zoom: 11 }}
      >
        <HMSMarker
          coordinate={{ latitude: 49.05498690478469, longitude: 20.300363581972807 }}
          title="Your position"
        />
        <HMSMarker
          coordinate={{ latitude: 49.04998690478469, longitude: 20.305363581972807 }}
          title="Your position"
        />
        <HMSMarker
          coordinate={{ latitude: 49.05898690478469, longitude: 20.272363581972807 }}
          title="Your position"
        />
        {markers? markers.map(mark => <HMSMarker coordinate={{latitude: mark.locationX, longitude: mark.locationY}} 
        title = {mark.name}/>) : null}
      </HMSMap>
    </SafeAreaView>

  )
}