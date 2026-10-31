import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './components';

const meta = {
  title: 'Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { label: 'Email address', placeholder: 'you@example.com' },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: 'We will never share your email.' } };
export const WithError: Story = { args: { error: 'Enter a valid email address.' } };
