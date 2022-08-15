import api from "./api";

export function getHashtags() {
  return api.get("/hashtag");
}

export function getPostsByHashtag(searchHashtag, hashtag, token) {
  return api.get(`/hashtag/${searchHashtag}`, null, token);
}