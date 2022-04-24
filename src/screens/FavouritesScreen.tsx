import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { Screens } from '../constants';
import { Meal } from '../data';
import { RootStackParams, RootState } from '../types';

const FavouritesScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, Screens.FavouriteMeals>) => {
  const favouriteMeals = useSelector<RootState, Array<Meal>>(
    state => state.meals.favouriteMeals,
  );

  return favouriteMeals.length ? (
    <MealList
      data={favouriteMeals}
      onMealSelect={(mealId: string) =>
        navigation.navigate(Screens.MealDetail, { mealId })
      }
    />
  ) : (
    <View style={styles.textContainer}>
      <Text style={styles.text}>No Favourites meals found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
});

export default FavouritesScreen;
