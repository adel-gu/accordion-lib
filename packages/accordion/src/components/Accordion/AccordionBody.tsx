import React, { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const accordionBodyVariants = cva(['']);

type AccordionBodyProps = ComponentProps<'div'> &
  VariantProps<typeof accordionBodyVariants>;

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(accordionBodyVariants({ className }))}
        {...props}
      >
        <div className={`overflow-hidden`}>
          <p className="p-3">{children}</p>
        </div>
      </div>
    );
  },
);

export { AccordionBody };
