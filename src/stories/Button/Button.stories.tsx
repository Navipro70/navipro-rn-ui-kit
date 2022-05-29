import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { Button, Size } from '../../components/Button/Button';
import { CenterView } from '../CenterView';

// All examples of controls can be founded here https://github.com/storybookjs/react-native/tree/next-6.0/examples/native/components/ControlExamples

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Hello world',
    loading: false,
    disabled: false,
  },
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  parameters: {
    notes: 'Standard Button component from UI Kit',
  },
  decorators: [
    Story => (
      <CenterView>
        <Story />
      </CenterView>
    ),
  ],
} as ComponentMeta<typeof Button>;

type Component = ComponentStory<typeof Button>;

export const Small: Component = args => <Button size={Size.Small} {...args} />;
export const Normal: Component = args => (
  <Button size={Size.Normal} {...args} />
);
export const Big: Component = args => <Button size={Size.Big} {...args} />;
