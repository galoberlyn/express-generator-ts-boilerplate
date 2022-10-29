import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';

const indexRouter = require('./routes/index');

const app = express();

app.use(cors({ origin: '*'})); // change as preffered, wildcard not for production!
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

export default app;