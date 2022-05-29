import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { CenterView } from '../CenterView';
import { Switcher } from '../../components/Switcher/Switcher';

// All examples of controls can be founded here https://github.com/storybookjs/react-native/tree/next-6.0/examples/native/components/ControlExamples

export default {
  title: 'Switcher',
  component: Switcher,
  args: {
    data: [
      { text: 'Hello', value: '1' },
      { text: 'Goodbye', value: '2' },
    ],
    width: 250,
    height: 36,
    borderwidth: 1,
    borderColor: '#C4C4C4',
  },
  argTypes: {
    onPress: { action: 'change switch' },
  },
  parameters: {
    notes: 'Standard Switcher component from UI Kit',
  },
  decorators: [
    Story => (
      <CenterView>
        <Story />
      </CenterView>
    ),
  ],
} as ComponentMeta<typeof Switcher>;

type Component = ComponentStory<typeof Switcher>;

export const DefaultSwitcher: Component = args => <Switcher {...args} />;
export const BigSwitcher: Component = args => (
  <Switcher {...args} height={52} width={368} />
);
export const SwitcherWithManyItems: Component = args => (
  <Switcher
    {...args}
    data={[
      { text: 'Item 1', value: '1' },
      { text: 'Item 2', value: '2' },
      { text: 'Item 3', value: '3' },
      { text: 'Item 4', value: '4' },
      { text: 'Collapsed text', value: '5' },
    ]}
    width={368}
  />
);

export const SwitcherWithCustomBorder: Component = args => (
  <Switcher {...args} borderWidth={2} borderColor="aqua" />
);
