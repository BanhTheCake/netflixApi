"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const tmdb_api_1 = require("./tmdb.api");
const TmdbServices = {
    getMediaList: (mediaType, mediaCategory, page) => {
        return axios_1.default.get(tmdb_api_1.default.mediaList(mediaType, mediaCategory, page));
    },
    getMediaDetails: (mediaType, mediaId) => {
        return axios_1.default.get(tmdb_api_1.default.mediaDetails(mediaType, mediaId));
    },
    getMediaCredits: (mediaType, mediaId) => {
        return axios_1.default.get(tmdb_api_1.default.mediaCredits(mediaType, mediaId));
    },
    getMediaVideos: (mediaType, mediaId) => {
        return axios_1.default.get(tmdb_api_1.default.mediaVideos(mediaType, mediaId));
    },
    getMediaRecommend: (mediaType, mediaId) => {
        return axios_1.default.get(tmdb_api_1.default.mediaRecommend(mediaType, mediaId));
    },
    getMediaImages: (mediaType, mediaId) => {
        return axios_1.default.get(tmdb_api_1.default.mediaImages(mediaType, mediaId));
    },
    getGenres: (mediaType) => {
        return axios_1.default.get(tmdb_api_1.default.genres(mediaType));
    },
    searchWithKeyword: (mediaType, page, query) => {
        return axios_1.default.get(tmdb_api_1.default.search(mediaType, page, query));
    },
    getPersonDetails: (personId) => {
        return axios_1.default.get(tmdb_api_1.default.personDetails(personId));
    },
    getPersonCombinedCredits: (personId) => {
        return axios_1.default.get(tmdb_api_1.default.personCombineCredits(personId));
    },
};
exports.default = TmdbServices;
//# sourceMappingURL=tmdb.services.js.map