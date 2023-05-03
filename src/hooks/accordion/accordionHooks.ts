import { useState } from 'react';

export interface AccordionArgs {
  isToggle: boolean;
  handleToggle: () => void;
}

export const useAccordion = (): AccordionArgs => {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevIsToggle) => !prevIsToggle);
  };

  return { isToggle, handleToggle };
};
