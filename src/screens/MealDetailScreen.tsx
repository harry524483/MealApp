import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { Screens } from '../constants';
import { Meal } from '../data';
import { colors } from '../styles/base';
import { RootStackParams, RootState } from '../types';
import { toggleFavourite } from '../store/actions/meals';

const MealDetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParams, Screens.MealDetail>) => {
  const { mealId } = route.params;
  const availableMeals = useSelector<RootState, Array<Meal>>(
    state => state.meals.meals,
  );
  const isCurrentMealFavourite = useSelector<RootState, boolean>(state =>
    state.meals.favouriteMeals.some(({ id }) => id === mealId),
  );
  const dispatch = useDispatch();

  const meal = availableMeals.find(({ id }) => mealId === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: meal?.title,
      headerRight: () => (
        <HeaderButton
          iconName={isCurrentMealFavourite ? 'star' : 'star-outline'}
          onClick={() => dispatch(toggleFavourite(meal?.id))}
        />
      ),
    });
  }, [mealId, dispatch, isCurrentMealFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.mealRowText}>{meal?.duration}m</Text>
        <Text style={styles.mealRowText}>{meal?.complexity.toUpperCase()}</Text>
        <Text style={styles.mealRowText}>
          {meal?.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>List of ingredients...</Text>
      <View style={styles.list}>
        {meal?.ingredients.map(ingredient => (
          <View key={ingredient} style={styles.item}>
            <Text>{ingredient}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.title}>List of steps...</Text>
      <View style={styles.list}>
        {meal?.steps.map(step => (
          <View key={step} style={styles.item}>
            <Text>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealRowText: {
    color: colors.black,
    fontFamily: 'OpenSans-Regular',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: colors.grey,
    margin: 5,
    borderRadius: 20,
  },
  list: { flexDirection: 'row', flexWrap: 'wrap' },
});

export default MealDetailScreen;
