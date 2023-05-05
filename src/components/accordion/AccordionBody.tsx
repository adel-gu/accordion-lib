import { FC, useContext } from 'react';
import { AccordionBodyProps } from '../../types';
import { AccordionContext } from '../../contexts/accordion';

const AccordionBody: FC<AccordionBodyProps> = ({ children }) => {
  const { isToggle } = useContext(AccordionContext)!;
  return <div id="Accordion-body">{isToggle && <div>{children}</div>}</div>;
};

export default AccordionBody;
