import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from './Filter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Filter',
  component: Filter,
  argTypes: {
    data: [],
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
    ],
  },
};
