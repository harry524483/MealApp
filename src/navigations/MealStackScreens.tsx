import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { commonHeaderStyles } from '../styles/base';

const Stack = createNativeStackNavigator();

const MealStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ ...commonHeaderStyles }}>
      <Stack.Screen
        name={Screens.Categories}
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={Screens.CategoryMeals}
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        name={Screens.MealDetail}
        component={MealDetailScreen}
        options={{
          title: 'Meal Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default MealStackScreens;
