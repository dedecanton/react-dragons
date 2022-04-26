import React from "react";
import Container from "../Container";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
