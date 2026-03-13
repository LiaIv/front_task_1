import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import {
  Alert,
  Card as MuiCard,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/jsonPlaceholder";
import { Card } from "../ui/Card";

export function PostsFeed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        setIsLoading(true);
        setError("");
        const data = await fetchPosts(controller.signal);
        setPosts(data);
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Card>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ArticleRoundedIcon color="warning" fontSize="small" />
            <Typography variant="overline" sx={{ letterSpacing: "0.14em" }}>
              JSONPlaceholder
            </Typography>
          </Stack>
          <Typography variant="h2">Посты из внешнего API</Typography>
        </Stack>

        {isLoading ? <Alert severity="info">Загружаю посты...</Alert> : null}
        {error ? <Alert severity="error">{error}</Alert> : null}

        {!isLoading && !error ? (
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid key={post.id} size={{ xs: 12, md: 6, xl: 4 }}>
                <MuiCard
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "rgba(8, 15, 29, 0.82)",
                    borderColor: "rgba(124, 156, 255, 0.14)",
                  }}
                >
                  <CardContent sx={{ display: "grid", gap: 1.5 }}>
                    <Typography variant="overline" color="warning.light">
                      Post #{post.id}
                    </Typography>
                    <Typography variant="h3">{post.title}</Typography>
                    <Typography color="text.secondary">{post.body}</Typography>
                  </CardContent>
                </MuiCard>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Stack>
    </Card>
  );
}
