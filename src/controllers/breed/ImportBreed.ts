import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import prisma from '../../services/prisma'

class ImportBreed {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const result: any = []

      fs.createReadStream('/Volumes/SSD/dev/PampaCare/src/csv/example.csv')
        .pipe(csv())
        .on('data', async (data) => {
          await result.push(data)
        })
        .on('end', async () => {
          const jsonArray = JSON.parse(JSON.stringify(result))
          const resultado = jsonArray.map((item: { Raça: String }) => item.Raça)

          resultado.forEach(async (breedName: string) => {
            await prisma.raca.createMany({
              skipDuplicates: true,
              data: {
                nome: breedName
              }
            })
          })
        })

      return response.status(201).json({ message: 'Importação de raças efetuada com sucesso !' })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportBreed }
