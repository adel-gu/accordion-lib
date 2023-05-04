import React from 'react';
import Accordion from '../../components/accordion/Accordion';
import AccordionItem from '../../components/accordion/AccordionItem';
import AccordionHeader from '../../components/accordion/AccordionHeader';
import AccordionBody from '../../components/accordion/AccordionBody';

const Accordions = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <div>This is a title</div>
          </AccordionHeader>
          <AccordionBody>this is body</AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accordions;
