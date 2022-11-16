import express from 'express'
import { getStatusCake } from './controllers';

const routes = express.Router({
  mergeParams: true
});

routes.get('/', getStatusCake);

export { routes };
