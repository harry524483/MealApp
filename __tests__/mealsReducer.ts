import { Meal } from '../src/data';
import { SET_FILTERS } from '../src/store/actions/meals';
import mealsReducer from '../src/store/reducers/meals';
import { MealsAction, MealsState } from '../src/types';

describe('mealsReducer', () => {
  it('', () => {
    const meal1 = {
      isGlutenFree: false,
      isLactoseFree: false,
      isVegan: false,
      isVegeterian: false,
    } as Meal;

    const meal2 = {
      isGlutenFree: true,
      isLactoseFree: false,
      isVegan: false,
      isVegeterian: false,
    } as Meal;

    // Arrange
    const state: MealsState = {
      favouriteMeals: [],
      filteredMeals: [],
      meals: [meal1, meal2],
    };
    const action: MealsAction = {
      type: SET_FILTERS,
      payload: {
        isGlutenFree: true,
        isLactoseFree: false,
        isVegan: false,
        isVegeterian: false,
      },
    };

    // Act
    const result = mealsReducer(state, action);

    // Assert
    expect(result.filteredMeals).toEqual([meal2]);
  });
});
