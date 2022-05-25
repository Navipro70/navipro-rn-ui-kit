import React from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const CenterView = ({ children }: Props) => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      children={children}
    />
  );
};
