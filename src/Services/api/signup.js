import api from "./api";

export function create(email, password, username, pictureUrl) {
  return api.post("/sign-up", {
    email,
    password,
    username,
    pictureUrl
  });
}
