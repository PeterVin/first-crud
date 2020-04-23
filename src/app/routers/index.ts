import { router as userRouter } from './user'
import { router as groupRouter } from './group'
import { router as todoRouter } from './todo'
import { router as categoryRouter } from './category'
import { Router } from 'express';

export const router: Router = Router({mergeParams: true});
router.use(userRouter);
router.use(groupRouter);
router.use(todoRouter);
router.use(categoryRouter);
