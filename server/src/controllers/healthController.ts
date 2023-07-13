import { Request, Response } from 'express';

export function getHealthCheck(request: Request, response: Response) {
  response.sendStatus(200).send('Working fine!');
}
