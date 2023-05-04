import React, { FC, createContext } from 'react';
import { AccordionStatus } from '../../types';
import { useAccordion } from '../../hooks/accordion';

interface AccordionProps {
  children: React.ReactNode;
}

export const AccordionContext = createContext<AccordionStatus | null>(null);

const Accordion: FC<AccordionProps> = ({ children }) => {
  const value = useAccordion();

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
