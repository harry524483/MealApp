import React from 'react';
import { Platform, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MealStackScreens from './MealStackScreens';
import { colors } from '../styles/base';
import FavouriteStackScreens from './FavouriteStackScreens';

const IosTab = createBottomTabNavigator();
const AndroidTab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const tabScreenProps = [
    {
      name: 'Meals',
      component: MealStackScreens,
      options: {
        tabBarIcon: ({ color }: { color: string }) => {
          return <Ionicons name="ios-restaurant" color={color} size={20} />;
        },
      },
    },
    {
      name: 'Favourites',
      component: FavouriteStackScreens,
      options: {
        tabBarIcon: ({ color }: { color: string }) => {
          return <Ionicons name="ios-star" color={color} size={20} />;
        },
      },
    },
  ];

  const iosScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.secondary,
    tabBarInactiveTintColor: colors.tertiary,
    tabBarLabelStyle: { fontFamily: 'OpenSans-Bold' },
  };

  const IosBottomTabs = (
    <IosTab.Navigator screenOptions={{ ...iosScreenOptions }}>
      {tabScreenProps.map((props, index) => (
        <IosTab.Screen key={index} {...props}></IosTab.Screen>
      ))}
    </IosTab.Navigator>
  );

  const AndroidBottomTabs = (
    <AndroidTab.Navigator>
      {tabScreenProps.map((props, index) => (
        <AndroidTab.Screen key={index} {...props}></AndroidTab.Screen>
      ))}
    </AndroidTab.Navigator>
  );

  return Platform.OS === 'android' ? AndroidBottomTabs : IosBottomTabs;
};

export default BottomTabs;
