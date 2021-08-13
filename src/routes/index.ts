import { Router } from 'express'
import { breedRoutes } from './breed.routes'
import { districtRoutes } from './district.routes'

const router = Router()
breedRoutes(router)
districtRoutes(router)

export { router }
