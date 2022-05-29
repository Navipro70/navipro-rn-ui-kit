import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

import {
  Container,
  Label,
  StyledTextInput,
  Wrapper,
  Error,
} from './Input.style';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState(props.autoFocus || false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur?.(e);
  };

  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <Wrapper focused={focused} error={!!error}>
        <StyledTextInput onFocus={handleFocus} onBlur={handleBlur} {...props} />
      </Wrapper>
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};
