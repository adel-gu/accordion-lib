import { useState } from 'react';
import { AccordionStatus } from 'types/accordion';

export const useAccordion = (): AccordionStatus => {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevIsToggle) => !prevIsToggle);
  };

  return { isToggle, handleToggle };
};
