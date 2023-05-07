import { createContext } from 'react';
import { AccordionStatus } from 'types/accordion';
export const AccordionContext = createContext<AccordionStatus>({});
