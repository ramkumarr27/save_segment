import { useState } from "react";
import "./App.css";
import SaveSegment from "./components/SaveSegment";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Save Segment</button>
      <SaveSegment openModal={modalIsOpen} closeModal={setModalIsOpen} />
    </>
  );
}

export default App;
