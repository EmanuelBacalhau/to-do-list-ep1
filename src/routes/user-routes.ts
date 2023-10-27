import { Router } from 'express'

import detailsUserController from '../modules/controllers/user/details-user.controller'
import createUserController from '../modules/controllers/user/create-user.controller'
import updateUserController from '../modules/controllers/user/update-user.controller'

export const userRouter = Router()

userRouter.get('/users/:id', detailsUserController.handle)
userRouter.post('/users/register', createUserController.handle)
userRouter.put('/users/:id', updateUserController.handle)
