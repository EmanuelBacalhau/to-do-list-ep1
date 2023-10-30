import { prisma } from '../../../libs/prisma'

class GetAllListService {
  async execute() {
    const lists = await prisma.list.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
    })

    return lists
  }
}

export default new GetAllListService()
