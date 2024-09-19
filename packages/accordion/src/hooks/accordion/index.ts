import { useState } from 'react';

type AccordionStatus = {
  isToggle: boolean;
  handleToggle: () => void;
};

export const useAccordion = (): AccordionStatus => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prevIsToggle) => !prevIsToggle);
  };

  return { isToggle, handleToggle };
};
