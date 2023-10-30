import { prisma } from '../../../libs/prisma'

interface IRequest {
  title: string
  description: string
  list_id: string
}

class CreateTaskService {
  async execute(data: IRequest) {
    await prisma.task.create({
      data,
    })
  }
}

export default new CreateTaskService()
