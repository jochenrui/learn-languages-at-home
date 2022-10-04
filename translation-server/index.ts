import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import * as deepLTranslator from "./api/deepL-API";
import bodyParser from "body-parser";

import { PORT } from "./constants/environment";

const app: Express = express();
const jsonParser = bodyParser.json();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post(
  "/translate",
  jsonParser,
  (req: Request, res: Response, next: NextFunction) => {
    const { language, text } = req.body.params;
    deepLTranslator
      .translateText(language, text)
      .then((translation) => {
        res.send(translation);
      })
      .catch((error) => {
        next(error);
      });
  }
);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
