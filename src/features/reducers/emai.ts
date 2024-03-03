interface EmailAction {
  type: string;
  payload: string;
}
export const emailReducer = (state: string | null = null, action: EmailAction) => {
  switch (action.type) {
    case "EMAIL":
      return action.payload;
    default:
      return state;
  }
}