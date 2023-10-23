import { useState } from "react";

function useStatus(initial: boolean): [boolean, (b: boolean) => void] {
  const [status, setStatus] = useState<boolean>(initial);
  return [status, setStatus];
}

export { useStatus };
