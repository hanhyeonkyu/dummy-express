import express from "express";
import { rabbitmq } from "./middleware/rabbitmq";
class App {
  public app: express.Application;
  public static bootstrap(): App {
    return new App();
  }
  constructor() {
    this.app = express();
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("hello world!");
    });
    this.app.get(
      "/health-check",
      (req: express.Request, res: express.Response) => {
        res.send("i am alive!");
      }
    );
    this.app.get(
      "/rabbit_send/:key",
      async (req: express.Request, res: express.Response) => {
        const { key } = req.params;
        const ret = await rabbitmq.publisher(key, "something!");
        console.log(ret);
        res.send(ret);
      }
    );
    this.app.get(
      "/rabbit_pop/:key",
      async (req: express.Request, res: express.Response) => {
        const { key } = req.params;
        const ret = await rabbitmq.consumer(key);
        res.send(ret);
      }
    );
  }
}
export default App;
