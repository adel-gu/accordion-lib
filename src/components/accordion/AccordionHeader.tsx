import React, { FC, useContext } from 'react';
import { AccordionContext } from '../../contexts/accordion';
import { AccordionHeaderProps } from '../../types';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  titleIcon,
  closeIcon,
  openIcon,
  ...props
}) => {
  const { isToggle, handleToggle } = useContext(AccordionContext)!;
  return (
    <button onClick={handleToggle}>
      <div>
        {titleIcon}
        {children}
      </div>
      <div>
        {isToggle
          ? closeIcon || <BiChevronUp />
          : openIcon || <BiChevronDown />}
      </div>
    </button>
  );
};

export default AccordionHeader;
