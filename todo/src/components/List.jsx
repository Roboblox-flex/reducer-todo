import React from "react";
import Form from "./Form";

export default function List(props) {
  const toggleComplete = (click) => {
    props.dispatch({ type: "TOGGLE_COMPLETE", payload: click });
  };

  return (
    <div>
      <div>
        {props.tasks.map((task) => (
          <div key={task.id}>
            <div>
              <span></span>
              <span
                onClick={() => toggleComplete(task.id)}
                className={task.completed ? " completed" : ""}
              >
                {task.item}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Form tasks={props.tasks} dispatch={props.dispatch} />
    </div>
  );
}
