"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Reviews = class Reviews extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Reviews.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Reviews.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ values: ['tv', 'movie'] }),
    __metadata("design:type", String)
], Reviews.prototype, "mediaType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Reviews.prototype, "mediaId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Reviews.prototype, "mediaTitle", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Reviews.prototype, "mediaPoster", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT('medium'),
    }),
    __metadata("design:type", String)
], Reviews.prototype, "content", void 0);
Reviews = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'reviews',
        freezeTableName: true,
    })
], Reviews);
exports.Reviews = Reviews;
//# sourceMappingURL=review.entity.js.map