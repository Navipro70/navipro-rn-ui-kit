import React from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const CenterView = ({ children }: Props) => {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center' }}
      children={children}
    />
  );
};
