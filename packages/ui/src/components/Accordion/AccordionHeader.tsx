import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';

const accordionHeaderVariants = cva(
  'w-full flex justify-between items-center text-slate-800 disabled:text-slate-500',
);

type AccordionHeaderProps = ComponentProps<'button'> &
  VariantProps<typeof accordionHeaderVariants>;

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { handleToggle, item } = useContext(AccordionContext);
    const { hash } = useContext(AccordionItemContext);

    return (
      <div>
        <button
          ref={ref}
          className={cn(accordionHeaderVariants({ className }))}
          onClick={() => handleToggle?.(hash)}
          {...props}
        >
          <span>{children}</span>
          <span>{item === hash ? <FaMinus /> : <FaPlus />}</span>
        </button>
      </div>
    );
  },
);

export { AccordionHeader };
