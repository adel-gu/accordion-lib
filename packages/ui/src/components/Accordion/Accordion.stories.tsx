import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {},
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion {...args}>
    <Accordion.Item itemId="1">
      <Accordion.Header>Accordion Item#1</Accordion.Header>
      <Accordion.Body>
        Placeholder content for this accordion, which is intended to demonstrate
        the .accordion-flush class. This is the first item's accordion body.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item itemId="2">
      <Accordion.Header>Accordion Item#2</Accordion.Header>
      <Accordion.Body>
        Placeholder content for this accordion, which is intended to demonstrate
        the .accordion-flush class. This is the first item's accordion body.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
