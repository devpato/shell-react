import type { Meta, StoryObj } from '@storybook/react';

import { MyComponent } from './MyComponent';

const meta = {
  title: 'Example/MyComponent',
  component: MyComponent,
  argTypes: {
    data: []
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [
        {
            id: 1,
            name: "Pato",
            amount: 200
        },
        {
            id: 2,
            name: "Jose",
            amount: -500
        },
        {
            id: 3,
            name: "Lucas",
            amount: 300
        },
        {
            id: 4,
            name: "Patricio",
            amount: 700
        }
    ]
  },
};
