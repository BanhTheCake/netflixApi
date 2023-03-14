import { Model } from 'sequelize-typescript';
export declare class Users extends Model {
    id: number;
    userId: string;
    username: string;
    displayName: string;
    password: string;
}
