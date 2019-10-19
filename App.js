import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
 


export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarlabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="search" color={tintColor} size={24} />
      )
    }

  },
  Saved:{
    screen: Saved,
    navigationOptions: {
      tabBarlabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart"  color={tintColor} size={24} />
      )
    }
  }, 
  Trips:{
    screen: Trips,
    navigationOptions: {
      tabBarlabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={  ////////
          {height:24, width:24, tintColor:tintColor}
        } />
      )
    }
  },
  Inbox:{ 
    screen: Inbox,
    navigationOptions: {
      tabBarlabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <IconAntDesign name= "inbox"  color={tintColor} size={24} />
      )
    }  


  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarlabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <IconAntDesign name= "user" color={tintColor} size={24} />
      ) 
    }
  }    
  //2eme argument
},{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

          