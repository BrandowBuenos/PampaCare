import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import prisma from '../../services/prisma'

class ImportDistricts {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const result: any = []

      fs.createReadStream('src/csv/example.csv')
        .pipe(csv())
        .on('data', async (data) => {
          await result.push(data)
        })
        .on('end', async () => {
          const jsonArray = JSON.parse(JSON.stringify(result))
          const resultado = jsonArray.map((item: { Bairro: String }) => item.Bairro)

          resultado.forEach(async (breedName: string) => {
            await prisma.bairro.createMany({
              skipDuplicates: true,
              data: {
                nome: breedName
              }
            })
          })
        })

      return response.status(201).json({ message: 'Importação de bairros efetuada com sucesso !' })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportDistricts }
