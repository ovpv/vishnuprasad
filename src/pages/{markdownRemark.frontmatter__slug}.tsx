import React from "react";
import { graphql } from "gatsby";
import { Box, Container, Typography, Divider } from "@mui/material"; // Parsing HTML content to React components
import AppLayout from "../components/AppLayout";

interface IBlogPostTemplate {
  data?: any;
}

const BlogPostTemplate: React.FC<IBlogPostTemplate> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <AppLayout>
      <Container maxWidth="md">
        {/* Blog Header */}
        <Box py={5} textAlign="center">
          <Typography variant="h3" fontWeight="bold">
            {frontmatter.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Posted on {frontmatter.date}
          </Typography>
        </Box>

        {/* Blog Content */}
        <Box>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </Container>
    </AppLayout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPostTemplate;
