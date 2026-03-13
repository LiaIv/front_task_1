import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Card } from "../ui/Card";

export function UserCard({ name, role }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const stats = [
    { label: "Задач закрыто", value: "7" },
    { label: "Кофе выпито", value: "почти бесконечно" },
    { label: "Статус", value: "сдаю ДЗ" },
    { label: "Лайков", value: likes },
  ];

  return (
    <Card sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          height: 118,
          mx: -3,
          mt: -3,
          mb: 3,
          background:
            'radial-gradient(circle at 20% 20%, rgba(124, 156, 255, 0.5), transparent 25%), radial-gradient(circle at 82% 32%, rgba(52, 211, 153, 0.35), transparent 18%), url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200") center / cover',
        }}
      />

      <Stack spacing={2.5}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src="https://i.pravatar.cc/120?img=47"
            alt={`Аватар ${name}`}
            sx={{
              width: 72,
              height: 72,
              mt: -7,
              border: "3px solid rgba(124, 156, 255, 0.9)",
              boxShadow: "0 14px 32px rgba(3, 7, 18, 0.28)",
            }}
          />
          <Box>
            <Typography variant="h2" sx={{ fontSize: "1.8rem" }}>
              {name}
            </Typography>
            <Typography color="text.secondary">{role}</Typography>
          </Box>
        </Stack>

        <Grid container spacing={1.5}>
          {stats.map((s) => (
            <Grid key={s.label} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "rgba(8, 15, 29, 0.7)",
                  border: "1px solid rgba(124, 156, 255, 0.12)",
                }}
              >
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {s.label}
                </Typography>
                <Typography variant="h3">{s.value}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button
          type="button"
          variant="contained"
          color="secondary"
          startIcon={<FavoriteRoundedIcon />}
          onClick={handleLike}
          sx={{ alignSelf: "flex-start", borderRadius: 999 }}
        >
          Нравится
        </Button>
      </Stack>
    </Card>
  );
}
