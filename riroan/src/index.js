import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AppMinimal from './pages/minimal/AppMinimal'
import PortfolioLight from './pages/light/PortfolioLight'
import './reset.css'
import './default.css'
import { Provider } from 'react-redux'
import store from './app/store'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppMinimal />} />
				<Route path="/old" element={<App />} />
				<Route path="/light" element={<PortfolioLight />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
