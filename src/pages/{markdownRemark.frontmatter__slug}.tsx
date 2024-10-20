import * as React from "react";
import { graphql } from "gatsby";
import AppLayout from "../components/AppLayout";
import AppHeader from "../components/AppHeader";
import { Typography } from "@mui/material";

interface IBlogPostTemplate {
  data?: any;
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: IBlogPostTemplate) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <AppHeader
          title={frontmatter.title}
          subtitle={`posted on ${frontmatter.date}`}
        />
        <AppLayout>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </AppLayout>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
