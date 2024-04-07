import { configureStore } from '@reduxjs/toolkit'
import darkmodeSlice from './darkmodeSlice'

const store = configureStore({ reducer: { darkmode: darkmodeSlice.reducer } })

export default store
