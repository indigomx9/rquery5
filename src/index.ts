import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { bookRt } from "./routes/bookRt";
import { createConnection } from "typeorm";

(async () => {
    await createConnection();
    const app: express.Application = express();
    app.use(helmet());

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({"status message": "OK"});
        };
        next();
    });

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api", bookRt);
    
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}/api`);
        console.log("Press Ctrl + C to exit.");
    })
})().catch((error) => console.log(error));


