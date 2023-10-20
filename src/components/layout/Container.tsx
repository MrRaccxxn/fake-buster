import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col justify-center items-center">{children}</div>;
};
