import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Well done!");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost: ${port}`);
});
