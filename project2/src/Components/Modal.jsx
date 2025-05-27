import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      <h2>Something wrong...</h2>
      <p>Please enter all input fields information..</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("main-root")
  );
});
export default Modal;
