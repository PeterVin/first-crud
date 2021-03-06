import { router as userRouter } from './user';
import { router as groupRouter } from './group';
import { router as groupUserRouter } from './groupUser';
import { router as loginRouter } from './login';
//import { router as todoRouter } from './todo'
//import { router as categoryRouter } from './category'
import { Router } from 'express';

export const router: Router = Router({mergeParams: true});
router.use('/user', userRouter);
router.use('/group', groupRouter);
router.use('/group/:groupId/user', groupUserRouter);
router.use('/login', loginRouter);
//router.use(todoRouter);
//router.use(categoryRouter);
