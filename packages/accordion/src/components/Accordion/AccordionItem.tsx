import React, { ComponentProps, FC, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { AccordionContext } from '@/contexts/accordion';
import { useAccordion } from '@/hooks/accordion';
import { cn } from '@/utils/utils';

const accordionItemVariants = cva(['']);

type AccordionItemProps = ComponentProps<'div'> &
  VariantProps<typeof accordionItemVariants>;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    const value = useAccordion();
    return (
      <AccordionContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(accordionItemVariants({ className }))}
          {...props}
        />
      </AccordionContext.Provider>
    );
  },
);

export { AccordionItem };
