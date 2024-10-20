import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

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
      <p>© {new Date().getFullYear()} Vishnuprasad. All Rights Reserved.</p>
      <ul style={socialLinksStyle}>
        <li>
          <a
            href="https://www.linkedin.com/in/ovpv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ovpv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ovpv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ovpv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default AppFooter;
