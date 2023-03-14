"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmdb_config_1 = require("./tmdb.config");
const tmdbApi = {
    mediaList: (mediaType, mediaCategory, page) => {
        const path = [mediaType, mediaCategory].join('/');
        return (0, tmdb_config_1.default)(path, { page });
    },
    mediaDetails: (mediaType, mediaId) => {
        const path = [mediaType, mediaId].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    mediaCredits: (mediaType, mediaId) => {
        const path = [mediaType, mediaId, 'credits'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    mediaVideos: (mediaType, mediaId) => {
        const path = [mediaType, mediaId, 'videos'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    mediaRecommend: (mediaType, mediaId) => {
        const path = [mediaType, mediaId, 'recommendations'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    mediaImages: (mediaType, mediaId) => {
        const path = [mediaType, mediaId, 'images'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    genres: (mediaType) => {
        const path = ['genre', mediaType, 'list'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    search: (mediaType, page, query) => {
        const path = ['search', mediaType].join('/');
        return (0, tmdb_config_1.default)(path, { page, query });
    },
    personDetails: (personId) => {
        const path = ['person', personId].join('/');
        return (0, tmdb_config_1.default)(path);
    },
    personCombineCredits: (personId) => {
        const path = ['person', personId, 'combined_credits'].join('/');
        return (0, tmdb_config_1.default)(path);
    },
};
exports.default = tmdbApi;
//# sourceMappingURL=tmdb.api.js.map