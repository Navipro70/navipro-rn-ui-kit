import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
