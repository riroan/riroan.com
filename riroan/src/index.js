import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'
import './default.css'
import { Provider } from 'react-redux'
import store from './app/store'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
