import { FC, useContext } from 'react';
import { AccordionItemProps } from '../../types';
import { accordionClassesOptim } from '../../utils/accordion';
import { AccordionContext } from '../../contexts/accordion';
import { useAccordion } from '../../hooks/accordion';

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  ...props
}) => {
  const value = useAccordion();
  return (
    <AccordionContext.Provider value={value}>
      <div className={accordionClassesOptim('border ', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
