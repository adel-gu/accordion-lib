import { Meta, StoryFn } from '@storybook/react';

import { Accordion } from '.';

const story = {
	title: 'Components/Accordion',
	component: Accordion,
	tags: ['autodocs'],
} as Meta;

// eslint-disable-next-line react/function-component-definition
export const Default: StoryFn<typeof Accordion> = () => (
	<Accordion type='single' collapsible>
		<Accordion.Item value='item-1'>
			<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
			<Accordion.Content>
				Yes. It adheres to the WAI-ARIA design pattern.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion>
);

export default story;
