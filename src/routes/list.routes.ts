import { Router } from 'express'
import createListController from '../modules/controllers/list/create-list.controller'

export const listRouter = Router()

listRouter.post('/lists/register', createListController.handle)
