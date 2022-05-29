import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

export const Container = styled.View<{
  width: number;
  height: number;
  borderSize: number;
  borderColor: string;
}>`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: ${({ height }) => height}px;
  border: ${({ borderSize, borderColor }) =>
    css`
      ${borderSize}px solid ${borderColor}
    `};
  border-radius: 8px;
  width: ${({ width }) => width}px;
`;

export const Touch = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Animated.Text)`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 12px;
`;

export const ActiveBlock = styled(Animated.View)<{ borderSize: number }>`
  position: absolute;
  left: ${({ borderSize }) => -borderSize}px;
  height: 36px;
  background-color: #f19a60;
  border-radius: 8px;
`;
