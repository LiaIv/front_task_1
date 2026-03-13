const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";

export async function fetchPosts(signal) {
  const response = await fetch(POSTS_URL, { signal });

  if (!response.ok) {
    throw new Error(`Не удалось получить посты: HTTP ${response.status}`);
  }

  return response.json();
}
