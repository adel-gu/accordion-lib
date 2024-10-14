import { ComponentProps, forwardRef, useContext } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';

const accordionBodyVariants = cva([
  'grid',
  'grid-rows-[0fr]',
  'opacity-0',
  'overflow-hidden',
  'transition-all',
  'duration-500',
  'ease-in-out',
  'text-sm',
  'text-slate-600',
]);

export type AccordionBodyProps = ComponentProps<'div'> &
  VariantProps<typeof accordionBodyVariants>;

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { item } = useContext(AccordionContext);
    const { hash } = useContext(AccordionItemContext);

    return (
      <div
        ref={ref}
        className={cn(
          accordionBodyVariants({ className }),
          `${item === hash && 'grid-rows-[1fr] opacity-100'}`,
        )}
        {...props}
      >
        <div className="overflow-hidden">
          <p className="pt-2">{children}</p>
        </div>
      </div>
    );
  },
);

AccordionBody.displayName = "AccordionBody"
