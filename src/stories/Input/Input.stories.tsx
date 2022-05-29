import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { CenterView } from '../CenterView';
import { Input } from '../../components/Input/Input';

// All examples of controls can be founded here https://github.com/storybookjs/react-native/tree/next-6.0/examples/native/components/ControlExamples

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    label: '',
    error: '',
    selectionColor: 'red',
    placeholderTextColor: 'gray',
  },
  parameters: {
    notes: 'Standard Input component from UI Kit',
  },
  decorators: [
    Story => (
      <CenterView>
        <Story />
      </CenterView>
    ),
  ],
} as ComponentMeta<typeof Input>;

type Component = ComponentStory<typeof Input>;

export const DefaultInput: Component = args => <Input {...args} />;
export const InputWithLabel: Component = args => (
  <Input {...args} label={args.label || 'Label'} />
);
export const InputWithError: Component = args => (
  <Input {...args} error={args.error || 'Error'} />
);
export const InputWithLableAndError: Component = args => (
  <Input
    {...args}
    label={args.label || 'Label'}
    error={args.error || 'Error'}
  />
);
