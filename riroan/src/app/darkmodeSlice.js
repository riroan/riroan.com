import { createSlice } from '@reduxjs/toolkit'

const darkmodeSlice = createSlice({
	name: 'darkmode',
	initialState: {
		darkmode: '',
	},
	reducers: {
		toggle(state) {
			if (state.darkmode === '') {
				state.darkmode = 'darkmode'
			} else {
				state.darkmode = ''
			}
		},
	},
})
export const darkmodeActions = darkmodeSlice.actions
export default darkmodeSlice
