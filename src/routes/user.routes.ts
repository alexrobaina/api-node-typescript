import { Router } from 'express';
import passport from 'passport';
import tokenDecoded from '../middlewares/tokenDecoded';
const router = Router();

import {
  signIn,
  signUp,
  update,
  userId,
  listUsers,
  listUsersRole,
  resetPassword,
  deleteUser,
} from '../controllers/user.controller';

router.post('/user/create', signUp);
router.post('/user/login', signIn);
router.put('/user/update', passport.authenticate('jwt', { session: false }), update);
router.get('/user/query', userId);
router.get('/user/listUsers', listUsers);
router.get('/user/listUsersRole', listUsersRole);
router.post('/user/resetPassword', tokenDecoded, resetPassword);
// this route not using now because its not finish
router.post('/user/delete', passport.authenticate('jwt', { session: false }), deleteUser);

export default router;
