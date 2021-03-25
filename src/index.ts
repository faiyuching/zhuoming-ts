import express from 'express';
import { sequelize } from './sequelize'
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@sgtickets/common';

import { signupRouter } from './routes/user/signup';
import { signinRouter } from './routes/user/signin';
import { signoutRouter } from './routes/user/signout';
import { currentUserRouter } from './routes/user/current-user';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'dev',
}))

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {

  if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV must be defined');
  }

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(8000, () => {
      console.log('Listening on port 8000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();


