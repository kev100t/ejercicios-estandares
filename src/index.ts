import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { routes } from './cake/routes'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/cake', routes);

export = app;
