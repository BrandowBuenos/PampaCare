import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import prisma from '../../services/prisma'

class ImportArea {
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
          const resultado = jsonArray.map((item: { Área: String }) => item.Área)

          resultado.forEach(async (areaName: string) => {
            await prisma.area.createMany({
              skipDuplicates: true,
              data: {
                nome: areaName
              }
            })
          })
        })

      return response.status(201).json({ message: 'Importação de áreas efetuada com sucesso !' })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportArea }
