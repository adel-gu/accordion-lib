import { FC } from 'react';
import { AccordionItemProps } from 'types/accordion';
import { accordionClassesOptim, AccordionItemClasses } from 'utils/accordion';
import { AccordionContext } from 'contexts/accordion';
import { useAccordion } from 'hooks/accordion';

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  ...props
}) => {
  const value = useAccordion();
  return (
    <AccordionContext.Provider value={value}>
      <div
        className={accordionClassesOptim(AccordionItemClasses({ className }))}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export { AccordionItem };
