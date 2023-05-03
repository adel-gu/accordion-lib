import { createContext } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

import {
  useAccordion,
  AccordionArgs,
} from '../../hooks/accordion/accordionHooks';

export const AccordionContext = createContext<AccordionArgs | null>(null);

const Accordion = () => {
  const value = useAccordion();

  return (
    <AccordionContext.Provider value={value}>
      <div id="Accordion-item">
        <AccordionHeader />
        <AccordionBody />
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
