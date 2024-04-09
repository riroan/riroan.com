import { configureStore } from '@reduxjs/toolkit'
import darkmodeSlice from './darkmodeSlice'
import detailSlice from './detailSlice'

const store = configureStore({ reducer: { darkmode: darkmodeSlice.reducer, detail: detailSlice.reducer } })

export default store
