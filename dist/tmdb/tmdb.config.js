"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const BASE_URL = process.env.BASE_URL_API;
const API_KEY = process.env.API_KEY;
const getUrl = (path, query = {}) => {
    const qs = new URLSearchParams(query);
    return `${BASE_URL}/${path}?api_key=${API_KEY}&${qs}`;
};
exports.default = getUrl;
//# sourceMappingURL=tmdb.config.js.map