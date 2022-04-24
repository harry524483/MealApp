import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { colors } from '../styles/base';
import { Category } from '../types';

type CategoryGridItemProps = {
  onPress: () => void;
  item: Category;
};

const isAndriodPlatform = (version = 21) =>
  Platform.OS === 'android' && Platform.Version >= version;

const CategoryGridItem = ({ onPress, item }: CategoryGridItemProps) => {
  const ButtonComponent = isAndriodPlatform()
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <View style={styles.container}>
      <ButtonComponent style={styles.button} onPress={onPress}>
        <View style={{ ...styles.gridItems, backgroundColor: item.color }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: isAndriodPlatform() ? 'hidden' : 'visible',
    elevation: 3,
  },
  button: { flex: 1 },
  gridItems: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.16,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGridItem;
