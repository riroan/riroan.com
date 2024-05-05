import { configureStore } from '@reduxjs/toolkit'
import darkmodeSlice from './darkmodeSlice'
import languageSlice from './languageSlice'
import detailSlice from './detailSlice'

const store = configureStore({ reducer: { darkmode: darkmodeSlice.reducer, detail: detailSlice.reducer, language: languageSlice.reducer } })

export default store
