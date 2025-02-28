import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@components/Header/Logo';
import './index.css';

const meta: Meta<typeof Logo> = {
  title: 'Header/Logo/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
