import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';

type AccordionStatus = {
  handleToggle?: (item: string) => void;
  item?: string;
};

export const AccordionContext = createContext<AccordionStatus>({});

const accordionVariants = cva(['']);

export type AccordionProps = ComponentProps<'div'> &
  VariantProps<typeof accordionVariants> & {
    alwaysOpen?: boolean;
  };

const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, alwaysOpen = false, ...props }, ref) => {
    const [item, setItem] = useState('');

    const value = useMemo(() => {
      return {
        handleToggle: (item: string) => {
          setItem((prev) => (prev === item ? '' : item));
        },
        item,
      };
    }, [item]);

    useEffect(() => {
      const alwaysOpenedItemId = (
        React.Children.toArray(children)[0] as ReactElement<AccordionItemProps>
      ).props.itemId;

      if (alwaysOpen && alwaysOpenedItemId) {
        setItem(alwaysOpenedItemId);
      }
    }, [alwaysOpen]);

    return (
      <AccordionContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(accordionVariants({ className }))}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);

AccordionComponent.propTypes = {
  alwaysOpen: PropTypes.bool,
};

export const Accordion = Object.assign(AccordionComponent, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});

Accordion.displayName = "Accordion"
