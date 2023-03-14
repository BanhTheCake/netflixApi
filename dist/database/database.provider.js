"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv = require("dotenv");
const user_entity_1 = require("../Model/Entities/user.entity");
const favorite_entity_1 = require("../Model/Entities/favorite.entity");
const review_entity_1 = require("../Model/Entities/review.entity");
dotenv.config();
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: process.env.DATABASE_DIALECT,
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                dialectOptions: {
                    ssl: {
                        rejectUnauthorized: true,
                    }
                }
            });
            sequelize.addModels([user_entity_1.Users, favorite_entity_1.Favorites, review_entity_1.Reviews]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map