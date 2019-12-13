import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AccountController from './app/controllers/AccountController';
import EntryController from './app/controllers/EntryController';
import ProviderController from './app/controllers/ProviderController';

import authMiddlewware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/*----------------------------------------------------------------------*/
// Public access routes
/*----------------------------------------------------------------------*/
// Sessions
routes.post('/sessions', SessionController.store);

// Users
routes.post('/users', UserController.store);
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
// Restricted access routes
/*----------------------------------------------------------------------*/
// Auth Middleware
routes.use(authMiddlewware);

// Users
// routes.get('/users', UserController.index);
// routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.show);
routes.put('/users', UserController.update);
// routes.delete('/users/:id', UserController.delete);

// Provider types

// Providers
routes.get('/providers', ProviderController.index);

// Appointments

// Accounts
routes.get('/accounts', AccountController.show);

// Entries
routes.get('/entries', EntryController.index);
routes.post('/entries', EntryController.store);

// Cashflows

// Notifications

// Files
routes.post('/files', upload.single('file'), FileController.store);
/*----------------------------------------------------------------------*/

export default routes;
