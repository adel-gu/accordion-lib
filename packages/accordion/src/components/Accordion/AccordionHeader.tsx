import React, { FC, useContext } from 'react';
import { AccordionContext } from '../../contexts/accordion';
import { AccordionHeaderProps } from '../../types/accordion';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

import {
  AccordionHeaderClasses,
  accordionClassesOptim,
} from '../../utils/accordion';

const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  titleIcon,
  closeIcon,
  openIcon,
  className,
  bg,
  bgToggle,
  ...props
}) => {
  const { isToggle, handleToggle } = useContext(AccordionContext);
  bgToggle = isToggle ? bgToggle : null;
  return (
    <h2>
      <button
        onClick={handleToggle}
        className={accordionClassesOptim(
          AccordionHeaderClasses({ bg, bgToggle, className }),
        )}
        {...props}
      >
        <div className="flex items-center">
          {titleIcon && <span className="mr-2">{titleIcon}</span>}
          <span>{children}</span>
        </div>
        <div>
          {isToggle
            ? closeIcon || <BsChevronUp />
            : openIcon || <BsChevronDown />}
        </div>
      </button>
    </h2>
  );
};

export { AccordionHeader };
