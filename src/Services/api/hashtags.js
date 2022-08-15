import api from './api';

export function getHashtags(){
    return api.get("/hashtag");
}

export function getPostsByHashtag(searchHashtag, hashtag) {
    return api.get(`/hashtag/${searchHashtag}`, null, {hashtag} );
}