import { Request, Response } from 'express'
import { z } from 'zod'
import detailsListService from '../../services/list/details-list.service'

class DetailsListController {
  async handle(req: Request, res: Response) { 
    const id = req.id

    const list = await detailsListService.execute({ id })

    return res.status(200).json(list)
  }
}

export default new DetailsListController()
