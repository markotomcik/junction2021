import HMSMap, { MapTypes } from "@hmscore/react-native-hms-map";
import React from 'react';
import { TopNavigation } from '@ui-kitten/components';
import {
  SafeAreaView
} from 'react-native';

export const Home = () => (
  <SafeAreaView>
    <TopNavigation title='GitFud' alignment='center' />
    <HMSMap
      mapType={MapTypes.NORMAL}
      style={{ height: "100%" }}
      camera={{ target: { latitude: 49.05498690478469, longitude: 20.300363581972807 }, zoom: 11 }}
    />

  </SafeAreaView>
)