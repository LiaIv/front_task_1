import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKinopoiskMovies } from "../../api/kinopoisk";
import { FilterInput } from "../FilterInput/FilterInput";
import { SearchInput } from "../SearchInput/SearchInput";
import { toggleFavorite } from "../../store/slices/favoritesSlice";
import { Card } from "../ui/Card";
import styles from "../../styles/kinopoiskExplorer.module.css";

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
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Kinopoisk API</p>
          <h2 className={styles.title}>Поиск и фильтрация фильмов</h2>
        </div>

        <div className={styles.controls}>
          <SearchInput value={searchValue} onChange={setSearchValue} />
          <FilterInput
            value={genreValue}
            onChange={setGenreValue}
            options={GENRE_OPTIONS}
          />
        </div>

        {isLoading ? <p className={styles.status}>Ищу фильмы...</p> : null}
        {error ? <p className={styles.error}>{error}</p> : null}

        {!isLoading && !error && movies.length === 0 ? (
          <p className={styles.status}>
            По текущему запросу ничего не нашлось. Попробуй изменить поиск или
            жанр.
          </p>
        ) : null}

        {!isLoading && !error && movies.length > 0 ? (
          <div className={styles.grid}>
            {movies.map((movie) => (
              <article key={movie.id} className={styles.movieCard}>
                <div className={styles.posterWrap}>
                  <button
                    type="button"
                    className={`${styles.favoriteButton} ${
                      favoriteIds.includes(movie.id) ? styles.favoriteButtonActive : ""
                    }`}
                    onClick={() => dispatch(toggleFavorite({ id: movie.id }))}
                    aria-label={
                      favoriteIds.includes(movie.id)
                        ? "Удалить из избранного"
                        : "Добавить в избранное"
                    }
                  >
                    {favoriteIds.includes(movie.id) ? "♥" : "♡"}
                  </button>

                  {movie.poster ? (
                    <img
                      src={movie.poster}
                      alt={`Постер: ${movie.title}`}
                      className={styles.poster}
                    />
                  ) : (
                    <div className={styles.posterFallback}>Нет постера</div>
                  )}
                </div>

                <div className={styles.movieContent}>
                  <div className={styles.movieMeta}>
                    <span>{movie.year}</span>
                    <span>
                      {movie.rating ? `KP ${movie.rating.toFixed(1)}` : "Без рейтинга"}
                    </span>
                  </div>
                  <h3 className={styles.movieTitle}>{movie.title}</h3>
                  <p className={styles.movieDescription}>{movie.description}</p>
                  <div className={styles.genreList}>
                    {movie.genres.map((genre) => (
                      <span key={`${movie.id}-${genre}`} className={styles.genreChip}>
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
