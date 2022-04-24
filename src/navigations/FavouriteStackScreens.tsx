import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {} from 'react-native';
import { Screens } from '../constants';
import FavouritesScreen from '../screens/FavouritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { commonHeaderStyles } from '../styles/base';

const Stack = createNativeStackNavigator();

const FavouriteStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ ...commonHeaderStyles }}>
      <Stack.Screen
        name={Screens.FavouriteMeals}
        component={FavouritesScreen}
        options={{
          headerTitle: 'Your Favourites',
        }}
      />
      <Stack.Screen
        name={Screens.MealDetail}
        component={MealDetailScreen}
        options={{
          headerTitle: 'Meal Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStackScreens;
