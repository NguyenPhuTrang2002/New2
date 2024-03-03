export const limit = (limit: number) => {
  return { type: "LIMIT", payload: limit }
}
