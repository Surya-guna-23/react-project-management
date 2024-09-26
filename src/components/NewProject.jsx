import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({ onadd, oncancel }) {
  // Fix casing here
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  function handlesave() {
    const enteredtitle = title.current.value;
    const entereddescription = description.current.value;
    const enteredduedate = duedate.current.value;

    if (
      enteredtitle.trim() === "" ||
      entereddescription.trim() === "" ||
      enteredduedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onadd({
      title: enteredtitle,
      description: entereddescription,
      duedate: enteredduedate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          oops... look like you forgot to enter your value
        </p>
        <p className="text-stone-600 mb-4">
          please make sure you provide a valid value for every input value
        </p>
      </Modal>
      <div className="w-[35 rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={oncancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounde-mx bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handlesave} // Change to onClick
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={duedate} label="Due date" />
        </div>
      </div>
    </>
  );
}
