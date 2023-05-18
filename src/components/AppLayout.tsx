import { Container, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth={"sm"}>{children}</Container>
    </div>
  );
};

export default AppLayout;
