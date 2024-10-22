import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';

const story = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			options: ['default', 'xs', 'sm', 'md', 'lg', 'xl'],
			control: { type: 'inline-radio' },
		},
	},
	args: {
		variant: 'default',
		size: 'default',
		children: 'Badge',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Gray: Story = {
	args: {
		variant: 'gray',
	},
};

export const Dark: Story = {
	args: {
		variant: 'dark',
	},
};

export const Light: Story = {
	args: {
		variant: 'light',
	},
};

export const Danger: Story = {
	args: {
		variant: 'danger',
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
	},
};

export default story;
