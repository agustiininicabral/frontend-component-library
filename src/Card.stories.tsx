import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './components';

const meta = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  args: { title: 'Workspace', description: 'Your recent activity', children: 'Card content goes here.' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
