import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import { AccordionContext } from './Accordion';

import PropTypes from 'prop-types';

type AccordionItemStatus = {
  hash: string;
};

export const AccordionItemContext = createContext<AccordionItemStatus>({
  hash: '',
});

const accordionItemVariants = cva('border-b border-slate-200 mx-3 py-3');

export type AccordionItemProps = ComponentProps<'div'> &
  VariantProps<typeof accordionItemVariants> & {
    itemId: string;
  };

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, itemId, ...props }, ref) => {
    const { handleToggle } = useContext(AccordionContext);

    const value = useMemo(() => {
      return { hash: itemId };
    }, [itemId]);

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

AccordionItem.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export { AccordionItem };
