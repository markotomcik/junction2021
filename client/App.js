/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  Alert
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'


import { HmsPushInstanceId } from "@hmscore/react-native-hms-push";
import HMSAvailability, { ErrorCode } from '@hmscore/react-native-hms-availability';
import { Home } from './home/Home';
import { AppNavigator } from './navigation/Navigation'
import { default as theme } from './custom-theme.json';
import { Provider } from 'react-redux';
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store = { store }>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...theme, ...eva.dark }}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ApplicationProvider>
    </Provider>
  );
};


function checkHMS() {
  testHmsCorePresence()
    .then((hmsCoreOk) => testAccountByRequestingPushNotificationsToken())
    .then((pushTokenRetrieved) => Alert.alert("SUCCESS", "All good. Start hacking!"))
    .catch((anyError) => Alert.alert("FAIL", "" + anyError));
}

function testAccountByRequestingPushNotificationsToken() {
  return HmsPushInstanceId.getToken("")
    .then((pushTokenAsJsonObject) => {
      var pushToken;
      try {
        pushToken = pushTokenAsJsonObject.result;
      } catch (err) {
        return Promise.reject(new Error("Push notifications token retrieved but malformated."));
      }
      console.log("HMS Push token: " + pushToken);
      if (pushToken.isEmpty) {
        return Promise.reject(new Error("Push notifications token retrieved, but empty. Clear app data and try again."));
      } else {
        return Promise.resolve("PushToken:" + pushToken);
      }

    });
}

function testHmsCorePresence() {
  return HMSAvailability.isHuaweiMobileServicesAvailable().then((checkResult) => {
    if (checkResult == ErrorCode.HMS_CORE_APK_AVAILABLE) {
      return Promise.resolve("HMS Core available");
    } else {
      return HMSAvailability.getErrorString(checkResult)
        .then((errorExplained) => Promise.reject("HMS Core not available because: " + errorExplained));
    }
  });
}

export default App;