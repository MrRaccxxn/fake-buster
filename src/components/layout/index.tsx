import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="w-full h-full bg-[url('/background.png')]"
      style={{
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100dvh",
      }}
    >
      <div className="m-auto max-w-7xl flex flex-col justify-center">
        <Header />
        {children}
      </div>
    </div>
  );
};
