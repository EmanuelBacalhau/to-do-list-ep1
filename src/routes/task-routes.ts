import { Router } from 'express'
import createTaskController from '../modules/controllers/task/create-task.controller'
import detailsTaskController from '../modules/controllers/task/details-task.controller'

export const taskRouter = Router()

taskRouter.post('/tasks/register', createTaskController.handle)
taskRouter.get('/tasks/:id', detailsTaskController.handle)
