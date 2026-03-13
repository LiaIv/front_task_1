import { Box, Container } from "@mui/material";

export function PageLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gap: 3,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
