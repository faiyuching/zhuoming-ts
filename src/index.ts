import express from 'express';
import { sequelize } from './sequelize'
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@sgtickets/common';

import { signupRouter } from './routes/user/signup';
import { signinRouter } from './routes/user/signin';
import { currentUserRouter } from './routes/user/current-user';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const testConnection = async () => {
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

testConnection();


