import Accordion from './components/accordion/Accordion';

import './App.css';
import AccordionItem from './components/accordion/AccordionItem';
import AccordionHeader from './components/accordion/AccordionHeader';
import AccordionBody from './components/accordion/AccordionBody';

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>This is a header</AccordionHeader>
          <AccordionBody>This is a Description</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
