import api from "./api";

export function searchUser(username, token) {
  return api.get(`/userSearch/${username}`, null, token);
}
