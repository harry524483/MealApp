import { Meal } from '../data';

export type RootStackParams = {
  Categories: undefined;
  CategoryMeals: { categoryId: string };
  MealDetail: { mealId: string };
  FavouriteMeals: undefined;
};

export type Category = {
  id: string;
  title: string;
  color: string;
};

export type RootState = {
  meals: MealsState;
};

export type MealsState = {
  meals: Array<Meal>;
  filteredMeals: Array<Meal>;
  favouriteMeals: Array<Meal>;
};

export type MealsActionPayload = {
  mealId: string;
};

export type MealsAction = {
  type: string;
  payload: MealsActionPayload | FilterSettings;
};

export type FilterSettings = {
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isVegan: boolean;
  isVegeterian: boolean;
};
