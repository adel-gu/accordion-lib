import React from 'react';
import { useToggle } from '../../hooks/accordion/accordionHooks';

const AccordionHeader = () => {
  const { toggle: expand, handleToggle: toggleExpand } = useToggle();
  return (
    <div id="Accordion-Header">
      <button onClick={toggleExpand}>
        This is Accordion Tile <span>{expand ? '+' : '-'}</span>
      </button>
    </div>
  );
};

export default AccordionHeader;
