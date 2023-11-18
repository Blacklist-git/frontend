import { useState } from "react";

function useStateWithCallback<T>(
  initialState: T,
  callback: (value: T) => void,
) {
  const [state, setState] = useState<T>(initialState);

  const setStateWithCallback = (value: T) => {
    setState(value);
    callback(value);
  };

  return [state, setStateWithCallback] as const;
}

export default useStateWithCallback;
