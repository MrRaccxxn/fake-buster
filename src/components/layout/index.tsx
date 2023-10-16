import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="bg-[url('/background.png')]"
      style={{
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="m-auto max-w-7xl flex flex-col justify-center">
        <Header />
        {children}
      </div>
    </div>
  );
};
