import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';

const accordionBodyVariants = cva(['']);

type AccordionBodyProps = ComponentProps<'div'> &
  VariantProps<typeof accordionBodyVariants>;

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { item } = useContext(AccordionContext);
    const { hash } = useContext(AccordionItemContext);

    return (
      <>
        {item === hash && (
          <div
            ref={ref}
            className={cn(accordionBodyVariants({ className }))}
            {...props}
          >
            <div className={`overflow-hidden`}>
              <p className="p-3">{children}</p>
            </div>
          </div>
        )}
      </>
    );
  },
);

export { AccordionBody };
