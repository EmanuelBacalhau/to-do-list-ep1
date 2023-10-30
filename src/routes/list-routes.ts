import { Router } from 'express'

import getAllListController from '../modules/controllers/list/get-all-list.controller'
import createListController from '../modules/controllers/list/create-list.controller'
import detailsListController from '../modules/controllers/list/details-list.controller'
import updateListController from '../modules/controllers/list/update-list.controller'
import deleteListController from '../modules/controllers/list/delete-list.controller'

export const listRouter = Router()

listRouter.get('/lists', getAllListController.handle)
listRouter.post('/lists/register', createListController.handle)
listRouter.get('/lists/:id', detailsListController.handle)
listRouter.put('/lists/:id', updateListController.handle)
listRouter.delete('/lists/:id', deleteListController.handle)
