import api from "./api";

export function login(email, password) {
  const body = {
    email,
    password,
  };

  return api.post("/signin", body);
}
