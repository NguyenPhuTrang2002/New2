export const reloadReducer = (state: boolean | null = null, action: any) => {
  switch (action.type) {
    case "RELOAD":
      return !state;
    default:
      return state;
  }
}
