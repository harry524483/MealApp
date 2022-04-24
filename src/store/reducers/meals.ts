import { meals } from '../../data';
import {
  FilterSettings,
  MealsAction,
  MealsActionPayload,
  MealsState,
} from '../../types';
import { SET_FILTERS, TOGGLE_FAVOURITE } from '../actions/meals';

const initialState: MealsState = {
  meals: meals,
  filteredMeals: meals,
  favouriteMeals: [],
};

const mealsReducer = (
  state: MealsState = initialState,
  action: MealsAction,
) => {
  if (action.type === TOGGLE_FAVOURITE) {
    const { mealId } = action.payload as MealsActionPayload;

    const mealExist = state.favouriteMeals.find(({ id }) => mealId === id);

    if (mealExist) {
      const filteredMeals = state.favouriteMeals.filter(
        ({ id }) => id !== mealId,
      );

      return { ...state, favouriteMeals: filteredMeals };
    } else {
      const favouriteMeal = state.meals.find(({ id }) => mealId === id);

      return {
        ...state,
        favouriteMeals: [...state.favouriteMeals, favouriteMeal],
      };
    }
  }

  if (action.type === SET_FILTERS) {
    const settings = action.payload as FilterSettings;

    const filteredMeals = state.meals.filter(meal =>
      Object.entries(settings).every(([key, value]) => meal[key] === value),
    );

    return { ...state, filteredMeals };
  }

  return state;
};

export default mealsReducer;
