import { Request, Response } from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import prisma from '../../services/prisma'
import { listFilesFromFolder } from '../../services/readAllCsvFiles'
class ImportBreed {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const result: any = []
      const filesList = listFilesFromFolder('src/files/csv')

      for (let i = 0; i < filesList.length; i++) {
        fs.createReadStream(filesList[i])
          .pipe(csv())
          .on('data', async (data) => {
            await result.push(data)
          })
          .on('end', async () => {
            const jsonArray = JSON.parse(JSON.stringify(result))

            // const resultadoFinal = filterRelatedWords(jsonArray, ['raça', 'raças', 'Raca', 'Raça'])

            const array1 = jsonArray.map((item: { Raça: String }) => item.Raça)
            const array2 = jsonArray.map((item: { raça: String }) => item.raça)
            const array3 = jsonArray.map((item: { raca: String }) => item.raca)

            const resultado = array1.concat(array2).concat(array3)

            const resultadoFinal = resultado.filter((item: string) => item !== undefined)

            resultadoFinal.forEach(async (breedName: string) => {
              await prisma.raca.createMany({
                skipDuplicates: true,
                data: {
                  nome: breedName.toLowerCase()
                }
              })
            })
          })
      }

      return response.status(201).json({ message: 'Importação de raças efetuada com sucesso !' })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { ImportBreed }
