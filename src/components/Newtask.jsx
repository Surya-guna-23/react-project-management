import { useState } from "react";
export default function Newtask({ onadd }) {
  const [enteredtask, setentertask] = useState("");

  function handlechange(event) {
    setentertask(event.target.value);
  }
  function handleclick() {
    if (enteredtask.trim() === "") {
      return;
    }
    onadd(enteredtask);
    setentertask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handlechange}
        value={enteredtask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleclick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </div>
  );
}
