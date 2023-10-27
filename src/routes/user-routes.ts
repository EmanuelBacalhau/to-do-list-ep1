import { Router } from 'express'

import detailsUserController from '../modules/controllers/user/details-user.controller'
import createUserController from '../modules/controllers/user/create-user.controller'

export const userRouter = Router()

userRouter.post('/users/register', createUserController.handle)
userRouter.get('/users/:id', detailsUserController.handle)
