import type { Meta, StoryObj } from '@storybook/react';
import Desktop from '@components/Header/Navigation/desktop';
import './index.css';

const meta: Meta<typeof Desktop> = {
  title: 'Header/Navigation/desktop/Desktop',
  component: Desktop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Desktop>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
