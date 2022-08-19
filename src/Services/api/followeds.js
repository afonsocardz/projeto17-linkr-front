import api from "./api";

export function getFollowedUsers(userId, token) {
  return api.get(`/user/followeds/${userId}`, null, token);
}

export function followUnfollow(userId, followedUserId, token) {
  return api.post("/user/follow-unfollow", { userId, followedUserId }, token);
}
