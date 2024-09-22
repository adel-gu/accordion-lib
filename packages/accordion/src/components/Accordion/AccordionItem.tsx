import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useMemo,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

type AccordionItemStatus = {
  hash: string;
};

export const AccordionItemContext = createContext<AccordionItemStatus>({
  hash: '',
});
//
const accordionItemVariants = cva('border-b border-slate-200 mx-3 py-3');

type AccordionItemProps = ComponentProps<'div'> &
  VariantProps<typeof accordionItemVariants>;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    const hash = useMemo(() => {
      return Math.random().toString(36).substring(2, 9);
    }, []);

    const value = useMemo(() => {
      return { hash };
    }, []);

    return (
      <AccordionItemContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(accordionItemVariants({ className }))}
          {...props}
        />
      </AccordionItemContext.Provider>
    );
  },
);

export { AccordionItem };
