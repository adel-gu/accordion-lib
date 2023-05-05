import { FC } from 'react';
import { AccordionItemProps } from '../../types';

const AccordionItem: FC<AccordionItemProps> = ({ children }) => {
  return <div id="Accordion-item">{children}</div>;
};

export default AccordionItem;
