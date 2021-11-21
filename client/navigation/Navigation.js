import React from 'react'
import { Map } from '../map/Map'
import { Home } from '../home/Home'
import { Settings } from '../settings/Settings'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab, Button, Icon, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomNavigator = ({ navigation, state}) => {

  return (
    <BottomNavigation
      appearance = 'noIndicator'
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' />
      <BottomNavigationTab title='Map' />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomNavigator {...props} shouldLoadComponent={true} to/>}>
    <Screen name = 'Home' component={Home} options={{headerTitle: () => (<Text style= {{ fontSize: 20, fontWeight: "bold", color: '#3474eb'}}>Home</Text>),  headerTitleAlign: "center", headerRight: () => (
      <Button appearance = 'ghost' style = {{margin: 2, padding: 0}} accessoryRight = {<Icon name="settings-2-outline"/>}/>
    )}}/>
    <Screen name = 'Map' component={Map} options={{headerShown: false}}/>
  </Navigator>
);



export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);