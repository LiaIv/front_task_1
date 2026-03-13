import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { UserCard } from "../components/UserCard/UserCard";
import { Card } from "../components/ui/Card";

const features = [
  {
    title: "React Router",
    text: "Страницы приложения открываются без перезагрузки через клиентский роутинг.",
    icon: RouteRoundedIcon,
  },
  {
    title: "Redux Toolkit",
    text: "Имя пользователя и избранные фильмы хранятся в глобальном store.",
    icon: AutoStoriesRoundedIcon,
  },
  {
    title: "Кинопоиск API",
    text: "Поиск и фильтрация фильмов продолжают работать на отдельной странице.",
    icon: MovieRoundedIcon,
  },
];

export default function HomePage() {
  return (
    <Stack spacing={3}>
      <Card>
        <Stack spacing={3}>
          <Box>
            <Typography variant="overline" color="warning.light">
              Material UI
            </Typography>
            <Typography variant="h2">
              Маршруты, глобальное состояние и UI-компоненты
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Grid key={feature.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      height: "100%",
                      p: 2.5,
                      borderRadius: 4,
                      bgcolor: "rgba(8, 15, 29, 0.82)",
                      border: "1px solid rgba(124, 156, 255, 0.14)",
                    }}
                  >
                    <Stack spacing={1.5}>
                      <Icon color="primary" />
                      <Typography variant="h3">{feature.title}</Typography>
                      <Typography color="text.secondary">{feature.text}</Typography>
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Card>

      <UserCard name="Роза" role="Студентка | Frontend" />
    </Stack>
  );
}
