import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState();

  const handleChanges = (event) => {
    setValues(event.target.value);
  };

  return [values, setValues, handleChanges];
};
