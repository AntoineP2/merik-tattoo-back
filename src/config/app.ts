import express from "express";
import {Request, Response} from "express";
import cors from "cors";
const app: express.Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => { res.send('Need to add /api')})
app.get('/api', (req: Request, res: Response) => { res.send('Need to add /v1')})
app.get('/api/v1', (req: Request, res: Response) => { res.send('Welcome at gladiatorBack API')})


export default app;