import type { Meta, StoryObj } from '@storybook/react';
import Child from '@components/Header/Navigation/mobile/child';
import './index.css';

const meta: Meta<typeof Child> = {
  title: 'Header/Navigation/mobile/Child',
  component: Child,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Child>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
