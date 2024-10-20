// src/components/Header.tsx
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "./BreadCrumbs";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const AppHeader: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const breadcrumbPath = [
    { name: "Home", link: "/" },
    { name: title, link: "" },
  ];

  return (
    <header>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              padding: "1rem",
            }}
          >
            <Typography variant="h4">Vishnuprasad's Blog</Typography>
          </Box>
          <Box sx={headerStyle}>
            <Container maxWidth="lg">
              <Typography variant="h4">{title}</Typography>
              {subtitle && <Typography variant="body1">{subtitle}</Typography>}
              <Breadcrumb path={breadcrumbPath} />
            </Container>
          </Box>
        </Box>
      </Box>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  marginBottom: "1rem",
  position: "sticky",
  top: 0,
};

export default AppHeader;
