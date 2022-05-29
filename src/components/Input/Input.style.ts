import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #602a48;
`;

export const Wrapper = styled.View<{ focused: boolean; error: boolean }>`
  padding: 8px 12px;
  width: 100%;
  border: 1px solid
    ${({ error, focused }) =>
      error ? '#D5537A' : focused ? '#222' : '#EAEBF0'};
  border-radius: 8px;
`;

export const StyledTextInput = styled.TextInput``;

export const Error = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  color: #d5537a;
`;
