import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';

const accordionHeaderVariants = cva(
  'w-full flex justify-between items-center text-slate-800',
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
          {...props}
          onClick={() => handleToggle?.(hash)}
        >
          <span>{children}</span>
          <span className="text-slate-800">
            {item === hash ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
      </div>
    );
  },
);

export { AccordionHeader };
