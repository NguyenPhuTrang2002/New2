interface Action {
  type: string;
  payload?: any; // Đây là trường payload có thể không tồn tại trong mỗi action
}

export const valueKeyword = (state: boolean | null = null, action: Action) => {
  switch (action.type) {
    case "KEYWORD":
      if (action.payload !== undefined) {
        return action.payload; // Trả về giá trị của payload từ action KEYWORD
      }
      return state;
    default:
      return state;
  }
};
