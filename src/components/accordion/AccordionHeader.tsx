import React, { ButtonHTMLAttributes, FC, useContext } from 'react';
import { AccordionContext } from './Accordion';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  titleIcon: React.ReactNode;
  closeIcon: React.ReactNode;
  openIcon: React.ReactNode;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  titleIcon,
  closeIcon,
  openIcon,
  ...props
}) => {
  const { isToggle, handleToggle } = useContext(AccordionContext)!;
  return (
    <div id="Accordion-Header">
      <button onClick={handleToggle}>
        {children}{' '}
        {isToggle
          ? closeIcon || <BiChevronUp />
          : openIcon || <BiChevronDown />}
      </button>
    </div>
  );
};

export default AccordionHeader;
