import express from 'express'

import 'express-async-errors'

import { errorHandle } from './middlewares/error-handling'
import { userRouter } from './routes/user-routes'
import { listRouter } from './routes/list.routes'

const server = express()

server.use(express.json())

server.use('/api', [userRouter, listRouter])

server.use(errorHandle)

server.listen(3333, () => {
  console.log('Started server!🚀')
})
