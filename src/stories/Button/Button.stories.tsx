import React from 'react';

import { Button } from '../../components/Button/Button';
import { CenterView } from '../CenterView';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Hello world',
  },
  decorators: [
    Story => (
      <CenterView>
        <Story />
      </CenterView>
    ),
  ],
} as any;

export const Basic = args => <Button {...args} />;
