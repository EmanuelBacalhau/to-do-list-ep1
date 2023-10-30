import { Request, Response } from 'express'
import getAllListService from '../../services/list/get-all-list.service'

class GetAllListController {
  async handle(req: Request, res: Response) {
    const lists = await getAllListService.execute()
    return res.status(200).json(lists)
  }
}

export default new GetAllListController()
