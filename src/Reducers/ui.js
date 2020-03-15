import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    confirmDelete: false,
    confirmEdit: false,
  },
  reducers: {
    setConfirmDelete: (state, action) => {
      state.ConfirmDelete = action.payload
    },
    setConfirmEdit: (state, action) => {
      state.ConfirmEdit = action.payload
    }
  }
})