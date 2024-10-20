import { Container, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import AppFooter from "./AppFooter";

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth={"sm"}>{children}</Container>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
