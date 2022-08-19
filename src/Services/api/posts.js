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

export function delPost(id, token) {
  return api.delete(`/posts/${id}`, null, token);
}

export function editPost(id, message, token) {
  return api.put(
    `/posts/${id}`,
    {
      message,
    },
    token
  );
}

export function getPosts(numberPage, id) {
  return api.get(`/posts`, null, null, { page: numberPage, limit: 10, id });
}

export function getPostsByUserId(id, searchedUserId, numberPage,token) {
  return api.get(`/posts/${searchedUserId}`, null, token, {
    id, 
    page: numberPage,
    limit: 10,
  });
}

export function likePost(postId, token) {
  return api.post(`/posts/${postId}`, null, token);
}
