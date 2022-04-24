import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import FiltersScreen from '../screens/FiltersScreen';
import { colors, commonHeaderStyles } from '../styles/base';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const FilterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ ...commonHeaderStyles }}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{ headerTitleAlign: 'center' }}></Stack.Screen>
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.secondary,
        drawerLabelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <Drawer.Screen
        name="Favourite Meals"
        component={BottomTabs}
        options={{ drawerLabel: 'Meals' }}
      />
      <Drawer.Screen
        name="Filter Meals"
        component={FilterStack}
        options={{
          headerTitle: 'Filter Meals',
          drawerLabel: 'Filters',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
