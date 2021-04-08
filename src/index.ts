import App from "./App";
import express from "express";

const port: number = Number(process.env.PORT) || 80;
const app: express.Application = new App().app;

app
  .listen(port, () => console.log(`Express server listioning at ${port}`))
  .on("error", (err) => console.error(err));
