import { Paper } from "@mui/material";

export function Card({ children, sx }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.25, md: 3 },
        borderRadius: 5,
        border: "1px solid rgba(124, 156, 255, 0.16)",
        background: "rgba(17, 24, 39, 0.74)",
        boxShadow: "0 24px 60px rgba(3, 7, 18, 0.24)",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}
