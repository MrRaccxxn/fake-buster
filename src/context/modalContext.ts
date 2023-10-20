import { useState } from "react";

export interface Modal {
  isOpen: boolean;
  open(): void;
  close(): void;
}

export default function useModal(): Modal {
  const [isOpen, setOpen] = useState(false);
  return {
    isOpen,
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  };
}
