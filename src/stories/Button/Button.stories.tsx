import React from 'react';

import { Button } from '../../components/Button/Button';
import { CenterView } from '../CenterView';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Hello world',
    color: 'red',
    Date: '18.02.2002',
    knom: true,
  },
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  parameters: {
    notes: 'Standard Button component from UI Kit',
  },
  decorators: [
    (Story: any) => (
      <CenterView>
        <Story />
      </CenterView>
    ),
  ],
} as any;

export const Basic = args => <Button {...args} />;
