interface AvatarAction {
  type: string;
  payload: string;
}

export const avatarReducer = (state: string | null = null, action: AvatarAction) => {
  switch (action.type) {
    case "AVATAR":
      return action.payload;
    default:
      return state;
  }
};