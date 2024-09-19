import React, { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionItem } from './AccordionItem';
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';

const accordionVariants = cva(['']);

type AccordionProps = ComponentProps<'div'> &
  VariantProps<typeof accordionVariants>;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(accordionVariants({ className }))}
        {...props}
      />
    );
  },
);

export default Object.assign(Accordion, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});
