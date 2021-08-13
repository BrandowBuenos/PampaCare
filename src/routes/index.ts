import { Router } from 'express'
import { breedRoutes } from './breed.routes'

const router = Router()
breedRoutes(router)

export { router }
