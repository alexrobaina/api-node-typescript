import express from 'express';
// morgan sirve para ver las peticiones a la api cuando esta corriendo el servidor en la consola
import morgan from 'morgan';
import serverless from 'serverless-http';
// sirve para comunicarnos con otros tipos de servidores de desarrollo
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import routes from './routes';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get('/', (req, res) => {
  res.send(`Welcome to Petslove 🦄`);
});

app.use(routes);

export default serverless(app);
