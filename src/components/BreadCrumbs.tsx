// src/components/Breadcrumb.tsx
import React from "react";
import { Link } from "gatsby";

interface BreadcrumbProps {
  path: Array<{ name: string; link: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" style={breadcrumbStyle}>
      <ul style={breadcrumbListStyle}>
        {path.map((crumb, index) => (
          <li key={index} style={breadcrumbItemStyle}>
            <Link to={crumb.link}>{crumb.name}</Link>
            {index < path.length - 1 && " / "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const breadcrumbStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
};

const breadcrumbListStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  gap: "0.5rem",
  margin: 0,
  padding: 0,
};

const breadcrumbItemStyle: React.CSSProperties = {
  display: "inline",
};

export default Breadcrumb;
