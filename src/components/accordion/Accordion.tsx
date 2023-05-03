import React, { FC, createContext } from 'react';

import {
  useAccordion,
  AccordionArgs,
} from '../../hooks/accordion/accordionHooks';

interface AccordionProps {
  children: React.ReactNode;
}

export const AccordionContext = createContext<AccordionArgs | null>(null);

const Accordion: FC<AccordionProps> = ({ children }) => {
  const value = useAccordion();

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
