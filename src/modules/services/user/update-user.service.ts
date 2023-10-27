import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface Update {
  name?: string
  birthday?: Date
  email?: string
  password?: string
}

interface IRequest {
  id: string
  data: Update
}

class UpdateUserService {
  async execute({ id, data }: IRequest) {
    const isUserExists = await prisma.user.findUnique({
      where: { id },
    })

    if (!isUserExists) {
      throw new AppError('User not found', 404)
    }

    await prisma.user.update({
      where: {
        id,
      },
      data,
    })
  }
}

export default new UpdateUserService()
