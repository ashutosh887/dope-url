import { Request, Response } from 'express';

export function getHealthCheck(request: Request, response: Response) {
  response.send('Working fine!').status(200);
}
