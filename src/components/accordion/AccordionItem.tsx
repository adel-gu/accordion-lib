import { FC } from 'react';

interface AccordionItemProps {
  children: React.ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ children }) => {
  return <div id="Accordion-item">{children}</div>;
};

export default AccordionItem;
