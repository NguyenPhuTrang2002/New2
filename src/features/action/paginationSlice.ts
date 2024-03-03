import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setItemsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
