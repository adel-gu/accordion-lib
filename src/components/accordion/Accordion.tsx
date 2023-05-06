import { FC } from 'react';
import { AccordionProps } from '../../types';

const Accordion: FC<AccordionProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Accordion;
