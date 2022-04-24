import { StyleSheet, Dimensions, Platform } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#4a148c',
  secondary: '#ff6f00',
  tertiary: '#5DA6A7',
  white: '#fff',
  black: '#000',
  grey: '#ccc',
  lighGrey: '#f5f5f5',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const commonHeaderStyles = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? colors.white : colors.black,
  headerBackTitle: 'Back',
  headerTitleStyle: { fontFamily: 'OpenSans-Bold' },
  headerBackTitleStyle: { fontFamily: 'OpenSans-Regular' },
};

type BaseStyles = {
  container: {
    flex: number;
    justifyContent: string;
    alignItems: string;
  };
};

const baseStyles: StyleSheet.NamedStyles<BaseStyles> = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...baseStyles, ...overrides });
};
