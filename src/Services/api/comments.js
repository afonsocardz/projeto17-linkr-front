import api from './api';

export function create(commentMessage, postId, token) {
  return api.post("/comments", {
    postId,
    commentMessage,
  }, token);
}

export function getComments(postId, token){
  return api.get("/comments", null, token, {postId});
}