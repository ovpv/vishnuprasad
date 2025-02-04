import { Container, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div>
      <CssBaseline />
      <AppHeader title="" />
      <Container maxWidth={"sm"}>{children}</Container>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
