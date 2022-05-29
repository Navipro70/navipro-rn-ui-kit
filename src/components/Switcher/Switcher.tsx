import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ActiveBlock, Container, Text, Touch } from './Switcher.style';

const WIDTH = Dimensions.get('screen').width - 40;
const HEIGHT = 36;
const BORDER_WIDTH = 1;
const BORDER_COLOR = '#C4C4C4';

export interface ISwitchItem {
  text: string;
  value: string;
}

export interface SwitcherProps {
  data: ISwitchItem[];
  width?: number;
  height?: number;
  borderWidth?: number;
  borderColor?: string;
  onChange: (item: ISwitchItem) => void;
}

export const Switcher = ({
  data,
  width = WIDTH,
  height = HEIGHT,
  borderColor = BORDER_COLOR,
  borderWidth = BORDER_WIDTH,
  onChange,
}: SwitcherProps) => {
  const index = useSharedValue(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { length: count } = data;
  const sectorSize = width / count;

  const sliderStyle = useAnimatedStyle(() => ({
    width: sectorSize,
    height,
    transform: [{ translateX: sectorSize * index.value }],
  }));

  const renderItem = (item: ISwitchItem, idx: number) => {
    const isSelected = idx === selectedIndex;

    const onChangeValue = () => {
      index.value = withTiming(idx);
      setSelectedIndex(idx);
      onChange?.(item);
    };

    return (
      <InnerItem
        key={item.value}
        onChange={onChangeValue}
        selected={isSelected}
        item={item}
      />
    );
  };

  return (
    <Container
      borderColor={borderColor}
      borderSize={borderWidth}
      height={height}
      width={width}>
      <ActiveBlock borderSize={borderWidth} style={sliderStyle} />
      {data.map(renderItem)}
    </Container>
  );
};

interface InnerItemProps {
  item: ISwitchItem;
  selected: boolean;
  onChange: () => void;
}

const InnerItem = ({ item, selected, onChange }: InnerItemProps) => {
  const isSelected = useSharedValue(+selected);

  const textStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      isSelected.value,
      [0, 1],
      ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
      'RGB',
    ),
  }));

  useEffect(() => {
    isSelected.value = withTiming(+selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <Touch onPress={onChange}>
      <Text numberOfLines={1} style={textStyle}>
        {item.text}
      </Text>
    </Touch>
  );
};
