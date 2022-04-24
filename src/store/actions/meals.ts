import { FilterSettings } from '../../types';

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavourite = (mealId: string | undefined) => ({
  type: TOGGLE_FAVOURITE,
  payload: { mealId },
});

export const setFilters = (settings: FilterSettings) => ({
  type: SET_FILTERS,
  payload: { ...settings },
});
