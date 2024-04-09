import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
	name: 'detail',
	initialState: {
		detail: true,
	},
	reducers: {
		toggle(state) {
      state.detail = !state.detail
		},
	},
})
export const detailActions = detailSlice.actions
export default detailSlice
