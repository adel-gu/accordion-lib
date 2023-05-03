import React, { useState } from 'react';

const Accordion = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((prevExapnd) => !prevExapnd);
  };

  return (
    <div id="Accordion-item">
      <div id="Accordion-Header">
        <button onClick={toggleExpand}>
          This is Accordion Tile <span>{expand ? '+' : '-'}</span>
        </button>
        {expand && <div>This is Accordion description</div>}
      </div>
    </div>
  );
};

export default Accordion;
