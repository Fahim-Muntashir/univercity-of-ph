import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

const getAController= (req: Request, res: Response) => {
  const a = 20;

  res.send(a);
};


app.get('/', getAController)
export default app;
