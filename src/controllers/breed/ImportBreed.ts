import { Request, Response } from 'express'

class ImportBreed {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      return response.status(200).json('message')
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportBreed }
