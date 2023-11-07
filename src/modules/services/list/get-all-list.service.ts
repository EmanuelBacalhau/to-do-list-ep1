import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class GetAllListService {
  async execute({ id }: IRequest) {
    const lists = await prisma.list.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
      where: {
        user_id: id
      }
    })

    return lists
  }
}

export default new GetAllListService()
