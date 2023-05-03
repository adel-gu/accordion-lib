import { FC, useContext } from 'react';
import { AccordionContext } from './Accordion';

interface AccordionBodyProps {
  children: string;
}

const AccordionBody: FC<AccordionBodyProps> = ({ children }) => {
  const { isToggle } = useContext(AccordionContext)!;
  return <div id="Accordion-body">{isToggle && <div>{children}</div>}</div>;
};

export default AccordionBody;
