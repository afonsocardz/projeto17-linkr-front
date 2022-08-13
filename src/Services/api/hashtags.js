import api from './api';

export function getHashtags(){
    return api.get("/hashtag");
}