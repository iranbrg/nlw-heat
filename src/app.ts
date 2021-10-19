import express from "express";
import routes from "./routes";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    public middlewares(): void {
        this.express.use(express.json());
    }

    public routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;
