import api from "./api";

export function getHashtags(token) {
  return api.get("/hashtag", null, token);
}

export function getPostsByHashtag(searchHashtag, numberPage, token) {
  return api.get(`/hashtag/${searchHashtag}`, null, token, {
    page: numberPage,
    limit: 10,
  });
}
