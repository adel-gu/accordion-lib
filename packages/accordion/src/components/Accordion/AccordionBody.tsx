import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { AccordionContext } from '@/contexts/accordion';
import { cn } from '@/utils/utils';

const accordionBodyVariants = cva(['']);

type AccordionBodyProps = ComponentProps<'div'> &
  VariantProps<typeof accordionBodyVariants>;

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { isToggle } = useContext(AccordionContext);

    return (
      <div
        ref={ref}
        className={cn(
          accordionBodyVariants({ className }),
          `${isToggle && 'grid-rows-[1fr]'}`,
        )}
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
