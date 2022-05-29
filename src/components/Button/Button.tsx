import React from 'react';
import { ActivityIndicator, PressableProps } from 'react-native';

import { Container, Wrapper, Title } from './Button.style';

export enum Size {
  Small = 'Small',
  Normal = 'Normal',
  Big = 'Big',
}

export interface ButtonProps extends PressableProps {
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  size = Size.Normal,
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  const sizeValues = {
    [Size.Small]: {
      height: 36,
      fontSize: 14,
    },
    [Size.Normal]: {
      height: 44,
      fontSize: 16,
    },
    [Size.Big]: {
      height: 52,
      fontSize: 16,
    },
  }[size];

  return (
    <Container disabled={disabled || loading} {...props}>
      {({ pressed }) => (
        <Wrapper
          height={sizeValues.height}
          disabled={disabled}
          pressed={pressed}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Title fontSize={sizeValues.fontSize}>{children}</Title>
          )}
        </Wrapper>
      )}
    </Container>
  );
};
