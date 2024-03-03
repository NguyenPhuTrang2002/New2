// reducers.ts

// Khởi tạo state mặc định
const initialState = {
  limit: 0 // hoặc giá trị mặc định bạn mong muốn
};

// Hàm reducer
const limitReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LIMIT':
      // Trả về một phiên bản mới của state với giới hạn được cập nhật
      return {
        ...state,
        limit: action.payload // action.payload chứa giá trị mới của giới hạn
      };
    default:
      return state; // Trường hợp mặc định, trả về state hiện tại không thay đổi
  }
};

export default limitReducer;
