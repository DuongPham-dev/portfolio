import { useState } from "react";

export const useToggle = () => {
  const [opened, setOpened] = useState(false);

  const open = () => setOpened(true);

  const close = () => setOpened(false);

  const toggle = () => setOpened((prev) => !prev);

  return {
    opened,
    open,
    close,
    toggle,
  };
};
