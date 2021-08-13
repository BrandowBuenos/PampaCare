import { Router } from 'express'

import {
  ImportBreed
} from '../controllers'

const importBreed = new ImportBreed()

const breedRoutes = (router: Router): void => {
  router.get('/api/breed', importBreed.execute.bind(ImportBreed))
}

export { breedRoutes }
