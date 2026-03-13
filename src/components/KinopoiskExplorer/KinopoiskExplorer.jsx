import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import {
  Alert,
  Box,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKinopoiskMovies } from "../../api/kinopoisk";
import { FilterInput } from "../FilterInput/FilterInput";
import { SearchInput } from "../SearchInput/SearchInput";
import { toggleFavorite } from "../../store/slices/favoritesSlice";
import { Card } from "../ui/Card";

const GENRE_OPTIONS = [
  "драма",
  "комедия",
  "боевик",
  "триллер",
  "фантастика",
  "приключения",
  "мелодрама",
];

export function KinopoiskExplorer() {
  const apiKey = import.meta.env.VITE_KINOPOISK_API_KEY?.trim() ?? "";
  const [searchValue, setSearchValue] = useState("Интерстеллар");
  const [genreValue, setGenreValue] = useState("драма");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const favoriteIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!apiKey) {
      setMovies([]);
      setIsLoading(false);
      setError(
        "Добавь ключ в `.env` как `VITE_KINOPOISK_API_KEY`, чтобы увидеть данные Кинопоиска.",
      );
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchKinopoiskMovies({
          apiKey,
          query: searchValue,
          genre: genreValue,
          signal: controller.signal,
        });

        setMovies(data);
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
        }
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [apiKey, genreValue, searchValue]);

  return (
    <Card>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <MovieCreationRoundedIcon color="primary" fontSize="small" />
            <Typography variant="overline" sx={{ letterSpacing: "0.14em" }}>
              Kinopoisk API
            </Typography>
          </Stack>
          <Typography variant="h2">Поиск и фильтрация фильмов</Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchInput value={searchValue} onChange={setSearchValue} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FilterInput
              value={genreValue}
              onChange={setGenreValue}
              options={GENRE_OPTIONS}
            />
          </Grid>
        </Grid>

        {isLoading ? <Alert severity="info">Ищу фильмы...</Alert> : null}
        {error ? <Alert severity="error">{error}</Alert> : null}

        {!isLoading && !error && movies.length === 0 ? (
          <Alert severity="warning">
            По текущему запросу ничего не нашлось. Попробуй изменить поиск или жанр.
          </Alert>
        ) : null}

        {!isLoading && !error && movies.length > 0 ? (
          <Grid container spacing={2}>
            {movies.map((movie) => {
              const isFavorite = favoriteIds.includes(movie.id);

              return (
                <Grid key={movie.id} size={{ xs: 12, md: 6, xl: 4 }}>
                  <MuiCard
                    variant="outlined"
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      overflow: "hidden",
                      bgcolor: "rgba(8, 15, 29, 0.82)",
                      borderColor: "rgba(124, 156, 255, 0.14)",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      {movie.poster ? (
                        <CardMedia
                          component="img"
                          height="240"
                          image={movie.poster}
                          alt={`Постер: ${movie.title}`}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: 240,
                            display: "grid",
                            placeItems: "center",
                            bgcolor: "rgba(15, 23, 42, 0.85)",
                          }}
                        >
                          <Typography color="text.secondary">Нет постера</Typography>
                        </Box>
                      )}

                      <IconButton
                        onClick={() => dispatch(toggleFavorite({ id: movie.id }))}
                        aria-label={
                          isFavorite ? "Удалить из избранного" : "Добавить в избранное"
                        }
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: isFavorite
                            ? "rgba(244, 63, 94, 0.92)"
                            : "rgba(8, 15, 29, 0.75)",
                          color: "#fff",
                          "&:hover": {
                            bgcolor: isFavorite
                              ? "rgba(225, 29, 72, 0.94)"
                              : "rgba(15, 23, 42, 0.9)",
                          },
                        }}
                      >
                        {isFavorite ? (
                          <FavoriteRoundedIcon />
                        ) : (
                          <FavoriteBorderRoundedIcon />
                        )}
                      </IconButton>
                    </Box>

                    <CardContent sx={{ display: "grid", gap: 1.5 }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">{movie.year}</Typography>
                        <Typography color="primary.light">
                          {movie.rating
                            ? `KP ${movie.rating.toFixed(1)}`
                            : "Без рейтинга"}
                        </Typography>
                      </Stack>

                      <Typography variant="h3">{movie.title}</Typography>
                      <Typography color="text.secondary">{movie.description}</Typography>

                      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {movie.genres.map((genre) => (
                          <Chip key={`${movie.id}-${genre}`} label={genre} size="small" />
                        ))}
                      </Stack>
                    </CardContent>
                  </MuiCard>
                </Grid>
              );
            })}
          </Grid>
        ) : null}
      </Stack>
    </Card>
  );
}
