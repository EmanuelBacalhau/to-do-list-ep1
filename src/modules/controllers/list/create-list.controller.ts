import { Request, Response } from 'express'
import { z } from 'zod'
import createListService from '../../services/list/create-list.service'

class CreateListController {
  async handle(req: Request, res: Response) {
    const createListSchema = z.object({
      name: z.string(),
      user_id: z.string().uuid(),
    })

    const data = createListSchema.parse(req.body)

    await createListService.execute(data)

    return res.status(201).end()
  }
}

export default new CreateListController()
