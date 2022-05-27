import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { Express } from "express";
import { logger } from "./config/LoggerConfig";
import * as morgan from "morgan";
import config from "./config/Config";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(
      morgan("dev", {
        stream: { write: (log: string) => logger.info(log.trim()) },
      })
    );

    app.use(
      cors({
        origin: true,
      })
    );

    Routes.forEach((route) => {
      (app as Express)[route.method](
        route.route,
        (req: Request, res: Response, next) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.listen(config.PORT);
    logger.info(`APP listening on port ${config.PORT}`);
  })
  .catch((e) => logger.error(e));
