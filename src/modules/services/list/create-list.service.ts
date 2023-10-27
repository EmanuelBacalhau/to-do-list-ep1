import { prisma } from '../../../libs/prisma'

interface IRequest {
  name: string
  user_id: string
}

class CreateTaskService {
  async execute(data: IRequest) {
    await prisma.list.create({
      data,
    })
  }
}

export default new CreateTaskService()
