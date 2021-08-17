export const filterRelatedWords = (jsonArray: Record<string, any>, relatedWords: string[]): any => {
  const result = []

  for (let i = 0; i < relatedWords.length; i++) {
    result.push(jsonArray.map((item: { relatedWords: any[] }) => item.relatedWords[i]))
  }

  const filteredArray = result.filter((item: string) => item !== undefined)

  return filteredArray
}
