import React from 'react';
import { TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/base';

type HeaderButtonProps = {
  onClick: () => void;
  iconName: string;
  size?: number;
};

const HeaderButton = ({ iconName, onClick, size = 20 }: HeaderButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Icon
        name={iconName}
        size={size}
        color={Platform.OS === 'android' ? colors.white : colors.black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HeaderButton;
