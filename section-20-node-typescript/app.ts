// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end('Hello World!');
// });

// server.listen(3000);

import express, { type Request, type Response, type NextFunction } from 'express';
import todoRoutes from './routes/todo.js';

const app = express();

// app.get('/', (req, response) => {
//   console.log(req.method);
//   response.json({ message: 'Hello world' });
// });

app.use(express.json());
app.use(todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'An error occured!' });
});

app.listen(3000);
