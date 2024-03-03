export const keyword = (keyword: string) => {
  return {
    type: "KEYWORD",
    payload: keyword
  }
}