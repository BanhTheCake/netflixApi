"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const favorite_entity_1 = require("./Entities/favorite.entity");
const review_entity_1 = require("./Entities/review.entity");
const user_entity_1 = require("./Entities/user.entity");
let ModelsModule = class ModelsModule {
};
ModelsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            { provide: 'USERS', useValue: user_entity_1.Users },
            { provide: 'FAVORITES', useValue: favorite_entity_1.Favorites },
            { provide: 'REVIEWS', useValue: review_entity_1.Reviews },
        ],
        exports: ['USERS', 'FAVORITES', 'REVIEWS'],
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=model.module.js.map