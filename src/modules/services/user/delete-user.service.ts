import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class DeleteUserService {
  async execute({ id }: IRequest): Promise<void> {
    const isUserExists = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!isUserExists) {
      throw new AppError('User not found', 404)
    }

    await prisma.user.delete({
      where: { id },
    })
  }
}

export default new DeleteUserService()
