import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Meal } from '../data';
import { colors } from '../styles/base';

type MealItemProps = {
  onMealSelect: (id: string) => void;
  item: Meal;
};

const MealItem = ({ item, onMealSelect }: MealItemProps) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => onMealSelect(item.id)}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.mealRowText}>{item.duration}m</Text>
            <Text style={styles.mealRowText}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealRowText}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  mealRowText: {
    color: colors.white,
    fontFamily: 'OpenSans-Regular',
  },
});

export default MealItem;
