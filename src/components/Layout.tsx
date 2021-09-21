import type { ReactNode, VFC } from "react";

import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
};
