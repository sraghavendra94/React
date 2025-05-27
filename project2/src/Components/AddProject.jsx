import { useRef } from "react";

import Modal from "./Modal.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function AddProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleSave() {
    let enteredTitle = title.current.value;
    let enteredDescription = description.current.value;
    let enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleClear() {
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }
  return (
    <>
      <Modal ref={dialog} />
      <section className="add-project">
        <div>
          <Button onSave={handleClear}>Clear</Button>
          <Button onSave={handleSave}>Save</Button>
        </div>
        <Input ref={title} label="Title" textarea={false} />
        <Input ref={description} label="Description" textarea={true} />
        <Input ref={dueDate} label="Due Date" textarea={false} />
      </section>
    </>
  );
}
