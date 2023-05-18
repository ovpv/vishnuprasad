import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import AppLayout from "../components/AppLayout";
import { Box, Card, Typography } from "@mui/material";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data as any;

  const posts = nodes.map(({ id, frontmatter: { slug, title } }: any) => ({
    id,
    slug,
    title,
  }));

  return (
    <AppLayout>
      <main>
        <Box mt={5}>
          <Typography variant="h2">Vishnuprasad's Blog</Typography>
          <Box my={5}>
            {posts.map(({ id, slug, title }: any) => (
              <Card>
                <Box p={2}>
                  <a href={slug}>{title}</a>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </main>
    </AppLayout>
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
