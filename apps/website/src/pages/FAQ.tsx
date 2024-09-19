import { Accordion } from '@accordion-lib/accordion';

const Faq = () => {
  return (
    <div className="w-1/2 mx-auto mt-8">
      <h1>Hello</h1>

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

export default Faq;
