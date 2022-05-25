import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "./config/Config";
import { Todo } from "./entity/Todo";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: config.SQLITE.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Todo],
  migrations: [],
  subscribers: [],
});
