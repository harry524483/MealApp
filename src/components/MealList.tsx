import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

type MealListProps = {
  data: any;
  onMealSelect: (id: string) => void;
};

const MealList = ({ data, onMealSelect }: MealListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={data}
        renderItem={({ item }) => (
          <MealItem item={item} onMealSelect={onMealSelect} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MealList;
