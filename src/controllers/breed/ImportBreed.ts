import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import prisma from '../../services/prisma'

const result: any = []
class ImportBreed {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      fs.createReadStream('/Volumes/SSD/dev/PampaCare/src/csv/example.csv')
        .pipe(csv())
        .on('data', (row) => result.push(row))
        // .on('end', () => {
        //   console.log(result)
        // })

      const jsonArray = JSON.parse(JSON.stringify(result))
      const resultado = jsonArray.map((item: { Raça: String }) => item.Raça)

      const insertBreed = resultado.forEach(async (element: string) => {
        await prisma.raca.createMany({
          skipDuplicates: true,
          data: {
            nome: element
          }
        })
      })

      return response.status(200).json(insertBreed)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportBreed }
