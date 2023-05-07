import React from 'react';
import Accordion from 'components/accordion/Accordion';
import { BsFillAlarmFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  return (
    <div className="w-1/2 mx-auto mt-8">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Accordion Item#1</Accordion.Header>
          <Accordion.Body>
            Placeholder content for this accordion, which is intended to
            demonstrate the .accordion-flush class. This is the first item's
            accordion body.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Accordion Item#1</Accordion.Header>
          <Accordion.Body>
            Placeholder content for this accordion, which is intended to
            demonstrate the .accordion-flush class. This is the first item's
            accordion body.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
