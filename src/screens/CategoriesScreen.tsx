import React, { useLayoutEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import { RootStackParams } from '../types';
import { Screens } from '../constants';
import { categories } from '../data';
import CategoryGridItem from '../components/CategoryGridItem';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, Screens.Categories>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton
          iconName="menu"
          onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ),
    });
  }, []);

  return (
    <FlatList
      numColumns={2}
      style={styles.container}
      data={categories}
      renderItem={({ item }) => (
        <CategoryGridItem
          onPress={() =>
            navigation.navigate(Screens.CategoryMeals, { categoryId: item.id })
          }
          item={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
});

export default CategoriesScreen;
