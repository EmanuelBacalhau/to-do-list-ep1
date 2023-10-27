import { Request, Response } from 'express'
import { z } from 'zod'
import detailsUserService from '../../services/user/details-user.service'

class DetailsUserController {
  async handle(req: Request, res: Response) {
    const detailsUserSchema = z.object({
      id: z.string().uuid(),
    })

    const data = detailsUserSchema.parse(req.params)

    const user = await detailsUserService.execute(data)

    return res.status(200).json(user)
  }
}

export default new DetailsUserController()
