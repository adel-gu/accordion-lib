import { FC } from 'react';
import { AccordionProps } from '../../types';
import { AccordionClasses, accordionClassesOptim } from '../../utils/accordion';

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

export default Accordion;
