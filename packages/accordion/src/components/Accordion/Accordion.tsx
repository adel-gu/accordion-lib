import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionItem } from './AccordionItem';
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';

type AccordionStatus = {
  handleToggle?: (item: string) => void;
  item?: string;
};

export const AccordionContext = createContext<AccordionStatus>({});

const accordionVariants = cva(['']);

export type AccordionProps = ComponentProps<'div'> &
  VariantProps<typeof accordionVariants>;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, ...props }, ref) => {
    const [item, setItem] = useState('');

    const value = useMemo(() => {
      return {
        handleToggle: (item: string) => {
          setItem(item);
        },
        item,
      };
    }, [item]);

    return (
      <AccordionContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(accordionVariants({ className }))}
          {...props}
        />
      </AccordionContext.Provider>
    );
  },
);

export default Object.assign(Accordion, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});
