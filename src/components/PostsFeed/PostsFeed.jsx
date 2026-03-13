import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/jsonPlaceholder";
import { Card } from "../ui/Card";
import styles from "../../styles/postsFeed.module.css";

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
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>JSONPlaceholder</p>
          <h2 className={styles.title}>Посты из внешнего API</h2>
        </div>

        {isLoading ? <p className={styles.status}>Загружаю посты...</p> : null}
        {error ? <p className={styles.error}>{error}</p> : null}

        {!isLoading && !error ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.post}>
                <span className={styles.meta}>Post #{post.id}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postBody}>{post.body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
