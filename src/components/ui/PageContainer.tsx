import React from "react";
import type { ReactNode } from "react";
interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default PageContainer;
