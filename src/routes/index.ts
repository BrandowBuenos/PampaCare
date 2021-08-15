import { Router } from 'express'
import { breedRoutes } from './breed.routes'
import { districtRoutes } from './district.routes'
import { areaRoutes } from './area.routes'

const router = Router()
breedRoutes(router)
districtRoutes(router)
areaRoutes(router)

export { router }
