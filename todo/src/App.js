import React, { useReducer } from "react";
import { initialTasks, reducer } from "./reducers/todoReducer";
import List from "./components/List";
import "./App.css";

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  return (
    <div>
      <div>
        <List tasks={tasks} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
