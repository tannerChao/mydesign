import type { Meta, StoryObj } from '@storybook/react';
import Header from '@components/Header';
import './index.css';

const meta: Meta<typeof Header> = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
