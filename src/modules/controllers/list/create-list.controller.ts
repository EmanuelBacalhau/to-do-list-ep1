import { Request, Response } from 'express'
import { z } from 'zod'
import createListService from '../../services/list/create-list.service'

class CreateListController {
  async handle(req: Request, res: Response) {
    const createListSchema = z.object({
      name: z.string(),
    })

    const id = req.id

    const { name } = createListSchema.parse(req.body)

    await createListService.execute({ name, user_id: id })

    return res.status(201).end()
  }
}

export default new CreateListController()
