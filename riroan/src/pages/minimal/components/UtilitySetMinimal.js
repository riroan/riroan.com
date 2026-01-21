import React from 'react'
import styles from './UtilitySetMinimal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { darkmodeActions } from '../../../app/darkmodeSlice'
import { detailActions } from '../../../app/detailSlice'
import { languageActions } from '../../../app/languageSlice'
import i18n from 'i18next'

export default function UtilitySetMinimal() {
	const dispatch = useDispatch()
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)
	const language = useSelector(state => state.language.language)

	return (
		<div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
			<button
				className={styles.button}
				onClick={() => {
					i18n.changeLanguage(language === 'ko' ? 'en' : 'ko')
					dispatch(languageActions.toggle())
				}}
				aria-label="Toggle language"
			>
				{language === 'ko' ? 'EN' : '한'}
			</button>
			<button
				className={styles.button}
				onClick={() => dispatch(detailActions.toggle())}
				aria-label="Toggle details"
			>
				{detail ? '−' : '+'}
			</button>
			<button
				className={styles.button}
				onClick={() => dispatch(darkmodeActions.toggle())}
				aria-label="Toggle dark mode"
			>
				{darkmode ? '☀' : '☾'}
			</button>
		</div>
	)
}
