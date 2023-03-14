"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginationFn = ({ page, limit, total }) => {
    const totalPage = Math.ceil(total / limit);
    return {
        page: page,
        limit: limit,
        totalPage: totalPage,
        totalResult: total,
    };
};
exports.default = paginationFn;
//# sourceMappingURL=paginationFn.js.map