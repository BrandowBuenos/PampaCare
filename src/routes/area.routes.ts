import { Router } from 'express'

import {
  ImportArea
} from '../controllers'

const importArea = new ImportArea()

const areaRoutes = (router: Router): void => {
  router.get('/api/area', importArea.execute.bind(importArea))
}

export { areaRoutes }
