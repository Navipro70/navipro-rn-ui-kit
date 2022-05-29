import styled from 'styled-components/native';

export const Container = styled.Pressable``;

export const Wrapper = styled.View<{
  height: number;
  pressed: boolean;
  disabled?: boolean | null;
}>`
  height: ${({ height }) => height}px;
  width: 144px;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled, pressed }) =>
    disabled ? '#F9D7BF' : pressed ? '#C5601D' : '#f19a60'};
  border-radius: 8px;
`;

export const Title = styled.Text<{ fontSize: number }>`
  color: white;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize}px;
`;
