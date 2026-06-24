import { useState } from "react";
import "./App.css";
//import Modal from "./messy/Modal";
// import Modal from "./with-pattren/modal/Modal";
// import AccordionDemo from "./with-pattren/Accordion/AccordionDemo";

import Card from "./with-pattren/Card/Card";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(true)}>Open Card Modal</button>
      <Card isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Card.Header>
          <h2>Image Card</h2>
        </Card.Header>
        <Card.Body>
          <p>Image card</p>
        </Card.Body>
        <Card.Footer>
          <button>Help!</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => alert("Action Taken!")}>Do Action</button>
        </Card.Footer>
      </Card>
    </div>
    // <div className="flex flex-col items-center">
    //   <button onClick={() => setIsOpen(true)}>Open Modal</button>
    //   <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    //     <Modal.Header>
    //       <h2>Delete Account</h2>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <p>Are you sure you want to delete account ?</p>
    //       <br />
    //       <AccordionDemo />
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <button>Help!</button>
    //       <button onClick={() => setIsOpen(false)}>Close</button>
    //       <button onClick={() => alert('Action Performed!')}>Do Action</button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
  );
}

export default App;
