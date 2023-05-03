import { FC, useContext } from 'react';
import { AccordionContext } from './Accordion';

interface AccordionHeaderProps {
  children: string;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ children }) => {
  const { isToggle, handleToggle } = useContext(AccordionContext)!;
  return (
    <div id="Accordion-Header">
      <button onClick={handleToggle}>
        {children} <span>{isToggle ? '+' : '-'}</span>
      </button>
    </div>
  );
};

export default AccordionHeader;
