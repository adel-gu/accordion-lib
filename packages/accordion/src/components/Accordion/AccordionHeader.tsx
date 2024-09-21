import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { BsChevronUp } from 'react-icons/bs';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';

const accordionHeaderVariants = cva([
  'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
]);

type AccordionHeaderProps = ComponentProps<'button'> &
  VariantProps<typeof accordionHeaderVariants>;

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { handleToggle } = useContext(AccordionContext);
    const { hash } = useContext(AccordionItemContext);

    return (
      <button
        ref={ref}
        className={cn(accordionHeaderVariants({ className }))}
        {...props}
        onClick={() => handleToggle?.(hash)}
      >
        <div className="flex items-center">
          <span>{children}</span>
        </div>
        <div>
          <BsChevronUp />
        </div>
      </button>
    );
  },
);

export { AccordionHeader };
