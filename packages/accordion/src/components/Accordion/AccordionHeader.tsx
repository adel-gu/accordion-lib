import React, { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { BsChevronUp } from 'react-icons/bs';
import { cn } from '@/utils/utils';

const accordionHeaderVariants = cva([
  'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
]);

type AccordionHeaderProps = ComponentProps<'button'> &
  VariantProps<typeof accordionHeaderVariants>;

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
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
