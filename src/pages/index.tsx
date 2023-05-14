import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log("data", data);
  const {
    allMarkdownRemark: { nodes },
  } = data as any;

  const posts = nodes.map(({ id, frontmatter: { slug, title } }: any) => ({
    id,
    slug,
    title,
  }));

  return (
    <main>
      {posts.map(({ id, slug, title }: any) => (
        <div id={id}>
          <a href={slug}>{title}</a>
        </div>
      ))}
    </main>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
