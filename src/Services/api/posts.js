import api from './api';

export function create (url, message, token){
  return api.post('/posts', {
    url,
    message
  }, token)
}