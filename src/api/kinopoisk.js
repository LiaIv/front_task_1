const KINOPOISK_BASE_URL = "https://api.poiskkino.dev";

function buildHeaders(apiKey) {
  return {
    "X-API-KEY": apiKey,
  };
}

function normalizeMovie(movie) {
  const title = movie.name || movie.alternativeName || movie.enName || "Без названия";
  const genres = Array.isArray(movie.genres)
    ? movie.genres.map((genre) => genre.name).filter(Boolean)
    : [];

  return {
    id: movie.id ?? `${title}-${movie.year ?? "unknown"}`,
    title,
    year: movie.year ?? "—",
    rating: movie.rating?.kp ?? movie.rating?.imdb ?? null,
    description:
      movie.shortDescription ||
      movie.description ||
      "Описание для этого фильма пока не добавлено.",
    poster: movie.poster?.previewUrl || movie.poster?.url || "",
    genres,
  };
}

function buildSearchUrl(query) {
  const url = new URL("/v1.4/movie/search", KINOPOISK_BASE_URL);
  url.searchParams.set("page", "1");
  url.searchParams.set("limit", "8");
  url.searchParams.set("query", query);
  return url;
}

function buildDiscoveryUrl(genre) {
  const url = new URL("/v1.4/movie", KINOPOISK_BASE_URL);

  url.searchParams.set("page", "1");
  url.searchParams.set("limit", "8");
  url.searchParams.set("type", "movie");
  url.searchParams.append("notNullFields", "name");
  url.searchParams.append("notNullFields", "poster.url");

  if (genre) {
    url.searchParams.append("genres.name", genre);
  }

  return url;
}

function filterMoviesByGenre(movies, genre) {
  if (!genre) {
    return movies;
  }

  const normalizedGenre = genre.trim().toLowerCase();

  return movies.filter((movie) =>
    movie.genres.some((movieGenre) => movieGenre.toLowerCase().includes(normalizedGenre)),
  );
}

export async function fetchKinopoiskMovies({ apiKey, query, genre, signal }) {
  const normalizedQuery = query.trim();
  const normalizedGenre = genre.trim();
  const url = normalizedQuery
    ? buildSearchUrl(normalizedQuery)
    : buildDiscoveryUrl(normalizedGenre);

  const response = await fetch(url, {
    headers: buildHeaders(apiKey),
    signal,
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("API-ключ Кинопоиска не указан или неверный.");
    }

    if (response.status === 403) {
      throw new Error("Лимит запросов Кинопоиска исчерпан или доступ запрещён.");
    }

    throw new Error(`Ошибка запроса к Кинопоиску: HTTP ${response.status}`);
  }

  const data = await response.json();
  const movies = Array.isArray(data.docs) ? data.docs.map(normalizeMovie) : [];

  return normalizedQuery ? filterMoviesByGenre(movies, normalizedGenre) : movies;
}
