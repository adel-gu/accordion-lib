import React, { FC, useContext } from 'react';
import { AccordionContext } from '../../contexts/accordion';
import { AccordionHeaderProps } from '../../types';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

import {
  AccordionHeaderClasses,
  headerClassesOptim,
} from '../../utils/accordion';

const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  titleIcon,
  closeIcon,
  openIcon,
  className,
  bg,
  ...props
}) => {
  const { isToggle, handleToggle } = useContext(AccordionContext)!;
  return (
    <button
      onClick={handleToggle}
      className={headerClassesOptim(AccordionHeaderClasses({ bg, className }))}
      {...props}
    >
      <div className="flex items-center">
        <span className="mr-2">{titleIcon}</span>
        <span>{children}</span>
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
