import classNames from "classnames";
import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames([
        `${"flex flex-col"}`,
        className,
      ])}
    >
      {children}
    </div>
  );
};
