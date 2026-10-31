import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './components';

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'In progress' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};
export const Success: Story = { args: { tone: 'success', children: 'Published' } };
export const Warning: Story = { args: { tone: 'warning', children: 'Needs review' } };
export const Danger: Story = { args: { tone: 'danger', children: 'Failed' } };
