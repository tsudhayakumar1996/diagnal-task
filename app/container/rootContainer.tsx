import { ReactNode } from "react";

const RootContainer = ({ children }: { children: ReactNode }) => {
  return <div className="h-dvh flex flex-col">{children}</div>;
};

export default RootContainer;
