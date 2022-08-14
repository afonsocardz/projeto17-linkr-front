import api from "./api";

export function searchUser(username, token) {
  const config = {
    Authorization: `Bearer ${token}`,
  };
  return api.get(`/userSearch/${username}`, config);
}
