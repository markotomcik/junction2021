import React from 'react'
import Home from '../home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';



const { Navigator, Screen } = createDrawerNavigator();

const Header = () => (
  <Layout style={{ paddingTop: 60, paddingBottom: 20, paddingLeft: 20 }}>
    <Text category='h1' style={{ fontSize: 30, fontFamily: 'serif', margin: 0, padding: 0 }}>coradesk</Text>
  </Layout>
);


const DrawerContent = ({ navigation }) => {
  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => index.row !== state.routeNames.length && navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title="Home" />
      <DrawerItem title="Rewards" />
    </Drawer>
  )
}

const Drawer = ({ navigation }) => {
  return (
    <Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        gestureEnabled: true
      })} drawerContent={props => <DrawerContent  />}
    >
      <Screen name = "Home" component={Home} />
      <Screen name = "Rewards" component={Home} />
    </Navigator>
  )
}