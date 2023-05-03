import { useContext } from 'react';
import { AccordionContext } from './Accordion';

const AccordionBody = () => {
  const { isToggle } = useContext(AccordionContext)!;
  return (
    <div id="Accordion-body">
      {isToggle && <div>This is Accordion description</div>}
    </div>
  );
};

export default AccordionBody;
