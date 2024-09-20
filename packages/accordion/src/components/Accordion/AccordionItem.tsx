import React, { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const accordionItemVariants = cva(['']);

type AccordionItemProps = ComponentProps<'div'> &
  VariantProps<typeof accordionItemVariants>;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(accordionItemVariants({ className }))}
        {...props}
      />
    );
  },
);

export { AccordionItem };
