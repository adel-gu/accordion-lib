import React, { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { AccordionContext } from '@/contexts/accordion';
import { cn } from '@/utils/utils';

const accordionHeaderVariants = cva(['']);

type AccordionHeaderProps = ComponentProps<'button'> &
  VariantProps<typeof accordionHeaderVariants>;

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { isToggle, handleToggle } = useContext(AccordionContext);
    return (
      <button
        ref={ref}
        onClick={handleToggle}
        className={cn(accordionHeaderVariants({ className }))}
        {...props}
      >
        <div className="flex items-center">
          {/* {titleIcon && <span className="mr-2">{titleIcon}</span>} */}
          <span>{children}</span>
        </div>
        <div>
          {/* {isToggle
                ? closeIcon || <BsChevronUp />
                : openIcon || <BsChevronDown />} */}
          <BsChevronUp />
        </div>
      </button>
    );
  },
);

export { AccordionHeader };
