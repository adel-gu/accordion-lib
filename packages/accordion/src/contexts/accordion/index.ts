import { createContext } from 'react';

type AccordionStatus = {
  isToggle?: boolean;
  handleToggle?: () => void;
};

export const AccordionContext = createContext<AccordionStatus>({});
