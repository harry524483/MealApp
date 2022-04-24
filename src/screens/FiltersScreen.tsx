import { DrawerActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import { Screens } from '../constants';
import { setFilters } from '../store/actions/meals';
import { colors } from '../styles/base';
import { RootStackParams } from '../types';

type FilterSwitchProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const FilterSwitch = ({ label, value, onChange }: FilterSwitchProps) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{label}</Text>
      <Switch
        trackColor={{ true: colors.primary }}
        value={value}
        onValueChange={value => onChange(value)}
      />
    </View>
  );
};

const FiltersScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, Screens.Categories>) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton
          iconName="menu"
          onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ),
      headerRight: () => (
        <HeaderButton
          iconName="save"
          onClick={() =>
            dispatch(
              setFilters({
                isGlutenFree,
                isLactoseFree,
                isVegan,
                isVegeterian,
              }),
            )
          }
        />
      ),
    });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filter</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={value => setIsGlutenFree(value)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={value => setIsLactoseFree(value)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={value => setIsVegan(value)}
      />
      <FilterSwitch
        label="Vegeterian"
        value={isVegeterian}
        onChange={value => setIsVegeterian(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: 10,
  },
  filterTitle: { fontFamily: 'OpenSans-Bold' },
});

export default FiltersScreen;
