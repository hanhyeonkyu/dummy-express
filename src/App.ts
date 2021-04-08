import express from "express";

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
  }
}
export default App;
