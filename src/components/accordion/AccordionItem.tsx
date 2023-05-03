import { FC, HtmlHTMLAttributes } from 'react';

interface AccordionItemProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const AccordionItem: FC<AccordionItemProps> = ({ children, ...props }) => {
  return (
    <div id="Accordion-item" style={{ border: '1px solid red' }}>
      {children}
    </div>
  );
};

export default AccordionItem;
