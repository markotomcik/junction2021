import HMSMap, { HMSMarker, MapTypes } from "@hmscore/react-native-hms-map";
import React from 'react';
import {
  SafeAreaView
} from 'react-native';

export const Map = () => (
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
      {/* Tu pôjde kód ktorý vypíše fetchnuté Boxy v radiusi r */}
    </HMSMap>

  </SafeAreaView>

)