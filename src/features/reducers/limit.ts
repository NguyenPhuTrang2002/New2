const limitReducer = (state = { limit: 10 }, action: any) => {
  switch (action.type) {
    case 'LIMIT':
      return {
        ...state,
        limit: action.payload
      };
    default:
      return state;
  }
};

export default limitReducer;
