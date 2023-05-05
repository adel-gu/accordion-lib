import { FC } from 'react';
import { AccordionProps } from '../../types';
import { AccordionContext } from '../../contexts/accordion';
import { useAccordion } from '../../hooks/accordion';

const Accordion: FC<AccordionProps> = ({ children }) => {
  const value = useAccordion();

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
