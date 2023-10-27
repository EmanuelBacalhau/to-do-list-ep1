import { Router } from 'express'
import createListController from '../modules/controllers/list/create-list.controller'
import detailsListController from '../modules/controllers/list/details-list.controller'

export const listRouter = Router()

listRouter.post('/lists/register', createListController.handle)
listRouter.get('/lists/:id', detailsListController.handle)
