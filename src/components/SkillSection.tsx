import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Java",
  "Spring Boot",
  "GraphQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Git",
];

const getRandomFloat = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);

export default function SkillsSection() {
  return (
    <Box py={5} textAlign="center">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Skills
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={1.5}
        mt={2}
        position="relative"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            animate={{
              y: [0, -5, 0], // Floating effect
            }}
            transition={{
              duration: getRandomFloat(3, 6), // Random duration for each
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Chip
              label={skill}
              color="primary"
              variant="outlined"
              sx={{
                fontSize: "1rem",
                p: 1,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.1)" }, // Hover effect
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
