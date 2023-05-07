import { FC } from 'react';
import { AccordionProps } from 'types/accordion';
import { AccordionClasses, accordionClassesOptim } from 'utils/accordion';
import { AccordionItem } from './AccordionItem';
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';

const Accordion: FC<AccordionProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={accordionClassesOptim(AccordionClasses({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};

export default Object.assign(Accordion, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});
