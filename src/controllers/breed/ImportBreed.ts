import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'

const result: any = []
class ImportBreed {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      fs.createReadStream('/Volumes/SSD/dev/PampaCare/src/csv/example.csv')
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
          console.log(result)
        })

      var jsonArray = JSON.parse(JSON.stringify(result))

      return response.status(200).json(jsonArray.map((item: { Raça: String }) => item.Raça))
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportBreed }
