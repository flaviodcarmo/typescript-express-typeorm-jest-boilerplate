import { DataSource } from "typeorm";
import { settings }  from './settings';
import dotenv from "dotenv";

dotenv.config();

import ApiRequestHistory from "../entities/ApiRequestHistory";
import Confirmation from "../entities/Confirmation";
import ConfirmationType from "../entities/ConfirmationType";
import Password from "../entities/Password";
import Profile from "../entities/Profile";
import User from "../entities/User";

export const dbConnection = new DataSource({
    type: settings.DATABASE.TYPE || 'sqlite',
    host: settings.DATABASE.HOST,
    port: settings.DATABASE.PORT,
    username: settings.DATABASE.USERNAME,
    password: settings.DATABASE.PASSWORD,
    database: settings.DATABASE.NAME || 'database.sqlite',
    entities: [
        ApiRequestHistory,
        Confirmation,
        ConfirmationType,
        Password,
        Profile,
        User,
    ],
    logging: true,
    synchronize: true
});