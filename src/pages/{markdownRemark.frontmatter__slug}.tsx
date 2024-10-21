import * as React from "react";
import { graphql } from "gatsby";
import AppLayout from "../components/AppLayout";
import AppHeader from "../components/AppHeader";
import { Disqus } from "gatsby-plugin-disqus";

interface IBlogPostTemplate {
  data?: any;
}

const SITE_URL = `https://ovpv.dev`;

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: IBlogPostTemplate) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, id } = markdownRemark;
  const disqusConfig = {
    url: `${SITE_URL}`,
    identifier: id,
    title: frontmatter.title,
  };
  return (
    <div>
      <div>
        <AppHeader
          title={frontmatter.title}
          subtitle={`posted on ${frontmatter.date}`}
        />
        <AppLayout>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {/* Disqus comments */}
          <Disqus config={disqusConfig} />
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
