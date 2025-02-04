import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import AppLayout from "../components/AppLayout";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import SkillsSection from "../components/SkillSection";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data as any;

  const { allMarkdownRemark } = data as { allMarkdownRemark: { nodes: any[] } };

  const posts: BlogPost[] = allMarkdownRemark.nodes.map(
    ({ id, frontmatter: { slug, title } }) => ({
      id,
      slug,
      title,
    })
  );

  return (
    <AppLayout>
      <main>
        <Box textAlign="center" py={5}>
          <Typography variant="h3" fontWeight="bold">
            Vishnuprasad O
          </Typography>
          <Typography variant="h6" color="textSecondary">
            📍 Location: Glasgow, United Kingdom | 🚀 Senior Software Engineer
          </Typography>
        </Box>

        <Divider />

        {/* Section 3: Blog Posts */}
        <Box py={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Blog Posts
          </Typography>
          <Box>
            {posts.map(({ id, slug, title }) => (
              <Card
                key={id}
                sx={{
                  mb: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    <Link href={slug} underline="hover" color="primary">
                      {title}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Divider />

        <SkillsSection />

        <Divider />
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
