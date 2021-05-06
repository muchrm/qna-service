import express, { Application, Request, Response } from 'express';
import { getAll, getAnswerByQuestion } from '@muchrm/qna-logic';

const app: Application = express();
const port = process.env.port || 3000;

app.get('/', async (req: Request, res: Response) => {
  getAll().then((qnaList) => {
    res.json({ qnaList });
  });
});

app.get('/:id', async (req: Request, res: Response) => {
  getAnswerByQuestion(+req.params.id)
    .then((answer) => {
      res.json({ answer });
    })
    .catch(() => {
      res.status(404).json({ answer: null });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
