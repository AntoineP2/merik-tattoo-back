import express from "express";
import {Request, Response} from "express";
import { exempleRouter } from "../routes/exemple";
import { pictureRouter } from "../routes/picture.router";
import { logRouter } from "../routes/log.router";
import cors from "cors";
import db from "../data/data";
const app: express.Application = express();

db.on
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => { res.send('Need to add /api')})
app.get('/api', (req: Request, res: Response) => { res.send('Need to add /v1')})
app.get('/api/v1', (req: Request, res: Response) => { res.send('Welcome at gladiatorBack API')})

app.use('/api/v1/exemple', exempleRouter);
app.use('/api/v1/picture', pictureRouter);
app.use('/api/v1/log', logRouter);
export default app;