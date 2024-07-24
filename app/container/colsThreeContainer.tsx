import { ReactNode } from "react";

const ColsThreeContainer = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-3 gap-3">{children}</div>;
};

export default ColsThreeContainer;
