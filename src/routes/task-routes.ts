import { Router } from 'express'
import createTaskController from '../modules/controllers/task/create-task.controller'
import detailsTaskController from '../modules/controllers/task/details-task.controller'
import updateTaskController from '../modules/controllers/task/update-task.controller'

export const taskRouter = Router()

taskRouter.post('/tasks/register', createTaskController.handle)
taskRouter.get('/tasks/:id', detailsTaskController.handle)
taskRouter.put('/tasks/:id', updateTaskController.handle)
