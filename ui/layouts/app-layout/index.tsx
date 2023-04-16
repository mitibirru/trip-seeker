import React, { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
