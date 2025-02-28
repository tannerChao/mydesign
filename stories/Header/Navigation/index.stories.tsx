import type { Meta, StoryObj } from '@storybook/react';
import Menu from '@components/Header/Navigation/menu';
import './index.css';

const meta: Meta<typeof Menu> = {
  title: 'Header/Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
