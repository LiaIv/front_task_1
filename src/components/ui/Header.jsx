import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { AppBar, Box, Chip, Stack, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../../styles/header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Главная", end: true, icon: HomeRoundedIcon },
  { to: "/posts", label: "Посты", icon: ArticleRoundedIcon },
  { to: "/movies", label: "Фильмы", icon: MovieRoundedIcon },
  { to: "/profile", label: "Профиль", icon: PersonRoundedIcon },
];

function getLinkClassName({ isActive, isPending, isTransitioning }) {
  return [
    styles.link,
    isActive ? styles.linkActive : "",
    isPending ? styles.linkPending : "",
    isTransitioning ? styles.linkTransitioning : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Header() {
  const userName = useSelector((state) => state.user.name);
  const favoritesCount = useSelector((state) => state.favorites.ids.length);

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        borderRadius: 5,
        border: "1px solid rgba(124, 156, 255, 0.18)",
        background: "rgba(10, 17, 31, 0.78)",
        backdropFilter: "blur(18px)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: { xs: 2.5, md: 3 },
          py: 2.5,
          minHeight: "auto",
          display: "grid",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AutoAwesomeRoundedIcon color="primary" fontSize="small" />
              <Typography variant="overline" sx={{ letterSpacing: "0.16em" }}>
                Material UI + Storybook
              </Typography>
            </Stack>
            <Typography variant="h1">Домашнее задание 8</Typography>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Chip
              icon={<PersonRoundedIcon />}
              label={`Пользователь: ${userName}`}
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<FavoriteRoundedIcon />}
              label={`Избранное: ${favoritesCount}`}
              color="secondary"
              variant="outlined"
            />
          </Stack>
        </Box>

        <Box component="nav" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                viewTransition
                className={getLinkClassName}
              >
                <Box
                  component="span"
                  sx={{ display: "inline-flex", gap: 1, alignItems: "center" }}
                >
                  <Icon fontSize="small" />
                  {item.label}
                </Box>
              </NavLink>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
