"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieConfig = void 0;
exports.cookieConfig = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24,
    domain: 'netflix-api-kappa.vercel.app',
    path: '/',
};
//# sourceMappingURL=cookie.config.js.map