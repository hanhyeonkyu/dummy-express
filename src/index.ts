import express from "express";
import App from "./App";
import { rabbitmq } from "./middleware/rabbitmq";

(async () => {
  const port: number = Number(process.env.PORT) || 5000;
  const app: express.Application = new App().app;
  await rabbitmq.connect();
  app
    .listen(port, () => console.log(`Express server listioning at ${port}`))
    .on("error", (err) => console.error(err));
})();
