import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
	name: 'language',
	initialState: {
		language: 'ko',
	},
	reducers: {
		toggle(state) {
			if (state.language === 'ko') {
				state.language = 'en'
			} else {
				state.language = 'ko'
			}
		},
	},
})
export const languageActions = languageSlice.actions
export default languageSlice
