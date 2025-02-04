import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
import { Box, Typography } from "@mui/material";

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#f8f9fa",
  borderTop: "1px solid #e0e0e0",
};

const socialLinksStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

const AppFooter: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <Box py={5} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Built with ❤️ by Vishnuprasad | © {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
};

export default AppFooter;
