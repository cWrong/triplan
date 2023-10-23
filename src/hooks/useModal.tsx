import { useState } from "react";

function useModal(initial: boolean): [boolean, (b: boolean) => void] {
  const [modal, modalHandler] = useState<boolean>(initial);
  return [modal, modalHandler];
}

export { useModal };
