import en from './dictionary/en'
import { useSelector } from 'react-redux'

export default function T(str) {
	const language = useSelector(state => state.language.language)
	if (language === 'en') {
		return en[str] ? en[str] : str
	}
	return str
}
