import api from "./api";

export function create(url, message, token) {
  return api.post(
    "/posts",
    {
      url,
      message,
    },
    token
  );
}

export function getPosts(id) {
  return api.get("/posts", null, null, { id });
}

export function getPostsByUserId(id, searchedUserId, token) {
  return api.get(`/posts/${searchedUserId}`, null, token, { id });
}

export function likePost(postId, token) {
  return api.post(`/posts/${postId}`, null, token);
}
