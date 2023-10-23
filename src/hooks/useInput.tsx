import React, { useState, useCallback, ChangeEventHandler } from "react";

function useInput(
  initial: string,
): [string, ChangeEventHandler<HTMLInputElement>, () => void] {
  const [input, setInput] = useState<string>(initial);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setInput(value);
  }, []);
  const reset = useCallback(() => setInput(initial), [initial]);
  return [input, onChange, reset];
}

export { useInput };
