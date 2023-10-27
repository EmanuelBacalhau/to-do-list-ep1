import { Router } from 'express'
import createUserController from '../modules/controllers/user/create-user.controller'

export const userRouter = Router()

userRouter.post('/users/register', createUserController.handle)
