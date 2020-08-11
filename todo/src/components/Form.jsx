import React from "react";
import { useForm } from "../hooks/useForm";

export default function Form(props) {
  const [item, setItem, handleChanges] = useForm("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TASK", payload: item });
    setItem("");
  };

  const clearCompleted = () => {
    props.dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="item"
            name="item"
            placeholder="New Task"
            value={item}
            onChange={handleChanges}
          />
        </div>
        <div className="">
          <button>Add Task</button>
        </div>
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
