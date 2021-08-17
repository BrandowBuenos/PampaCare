import fs from 'fs'

export const listFilesFromFolder = (folder: any): string[] => {
  const filesList = fs.readdirSync(folder)

  const files = []

  for (let index = 0; index < filesList.length; index++) {
    const stat = fs.statSync(`${String(folder)}/${String(filesList[index])}`)

    files.push(`${String(folder)}/${String(filesList[index])}`)
    if (stat.isDirectory()) {
      listFilesFromFolder(`${String(folder)}/${String(filesList[index])}`)
    }
  }
  return files
}
