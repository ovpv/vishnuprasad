import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "./BreadCrumbs";
import { Link } from "gatsby";

interface HeaderProps {
  title: string;
  subtitle?: string;
  slug: string; // Add slug to the props
}

const AppHeader: React.FC<HeaderProps> = ({ title, subtitle, slug }) => {
  const breadcrumbPath = [
    { name: "Home", link: "/" },
    { name: title, link: `/blog/${slug}` }, // Dynamically add the slug here
  ];

  return (
    <header>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              padding: "1rem",
              background: "#d7e9ff",
              "& > a": {
                textDecoration: "none",
                color: "#3a3a3a",
              },
            }}
          >
            <Link to="/">
              <Typography variant="h6">Vishnuprasad's Blog</Typography>
            </Link>
          </Box>
          <Box sx={headerStyle}>
            <Container maxWidth="lg">
              <Typography variant="h6">{title}</Typography>
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
