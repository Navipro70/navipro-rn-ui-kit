import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const CenterView = ({ children }: Props) => (
  <View
    onTouchStart={Keyboard.dismiss}
    style={styles.style}
    children={children}
  />
);

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
});
