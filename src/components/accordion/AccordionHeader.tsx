import { useContext } from 'react';
import { AccordionContext } from './Accordion';

const AccordionHeader = () => {
  const { isToggle, handleToggle } = useContext(AccordionContext)!;
  return (
    <div id="Accordion-Header">
      <button onClick={handleToggle}>
        This is Accordion Tile <span>{isToggle ? '+' : '-'}</span>
      </button>
    </div>
  );
};

export default AccordionHeader;
