function Modal(props) {
  let cancelHandler = function () {
    props.onCancel();
  };

  let confirmHandler = function () {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>

      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
