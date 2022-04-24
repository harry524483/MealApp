import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import { categories, Meal } from '../data';
import { RootStackParams, RootState } from '../types';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParams, Screens.CategoryMeals>) => {
  const { categoryId } = route.params;
  const availableMeals = useSelector<RootState, Array<Meal>>(
    state => state.meals.filteredMeals,
  );

  const categoryMeals = availableMeals.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    const category = categories.find(({ id }) => categoryId === id);

    navigation.setOptions({
      headerTitle: category?.title,
    });
  }, [categoryId]);

  return (
    <MealList
      data={categoryMeals}
      onMealSelect={(mealId: string) =>
        navigation.navigate(Screens.MealDetail, { mealId })
      }
    />
  );
};

export default CategoryMealsScreen;
