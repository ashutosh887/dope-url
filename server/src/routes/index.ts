import { Request, Response, Router } from 'express';
import { getHealthCheck } from '../controllers/healthController';

import {
  createShortUrl,
  getAnalytics,
  handleRedirect,
  getShortUrl
} from '../controllers/shortUrlController';

import validateResource from '../middlewares/validateResource';
import shortUrlSchema from '../schemas/shortUrlSchema';

const router = Router();

export default (): Router => {
  router.get('/health', getHealthCheck)

  router.post('/api/url', validateResource(shortUrlSchema), createShortUrl);

  router.get('/:shortId', handleRedirect);

  router.get('/api/url/:shortId', getShortUrl);

  router.get('/api/analytics', getAnalytics);

  return router;
};
