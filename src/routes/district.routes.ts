import { Router } from 'express'

import {
  ImportDistricts
} from '../controllers'

const importDistricts = new ImportDistricts()

const districtRoutes = (router: Router): void => {
  router.get('/api/district', importDistricts.execute.bind(importDistricts))
}

export { districtRoutes }
