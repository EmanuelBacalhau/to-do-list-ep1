import { Router } from 'express'
import createTaskController from '../modules/controllers/task/create-task.controller'

export const taskRouter = Router()

taskRouter.post('/tasks/register', createTaskController.handle)
