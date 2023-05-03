import { useState } from 'react';

interface ToggleHook {
  toggle: boolean;
  handleToggle: () => void;
}

export const useToggle = (): ToggleHook => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return { toggle, handleToggle };
};
