import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // -> react hook

  let deleteHandler = function() {
    setModalIsOpen(true);
  };

  let modalCloseHandler = function() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && <Modal onCancel={modalCloseHandler} onConfirm={modalCloseHandler}/>}
      {modalIsOpen && <Backdrop onClick={modalCloseHandler}/>}
    </div>
  );
}

export default Todo;
