import React from 'react'
import styles from './UtilitySet.module.css'
import { MdSunny } from 'react-icons/md'
import { BiSolidMoon } from 'react-icons/bi'
import { GoUnfold, GoFold } from 'react-icons/go'
import { useSelector, useDispatch } from 'react-redux'
import { darkmodeActions } from '../../app/darkmodeSlice'
import { detailActions } from '../../app/detailSlice'
import { languageActions } from '../../app/languageSlice'
import Utility from '../Utility'
import i18n from 'i18next'

export default function UtilitySet() {
	const dispatch = useDispatch()
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)
	const language = useSelector(state => state.language.language)

	return (
		<div className={styles.container}>
			<Utility
				icon={language === 'ko' ? '한' : 'A'}
				style={{ fontWeight: 500 }}
				onClick={() => {
					i18n.changeLanguage(language === "ko" ? "en" : "ko")
					dispatch(languageActions.toggle())
				}}
				className={darkmode}
			/>
			<Utility
				icon={detail ? <GoFold /> : <GoUnfold />}
				onClick={() => {
					dispatch(detailActions.toggle())
				}}
				className={darkmode}
			/>
			<Utility
				onClick={() => {
					dispatch(darkmodeActions.toggle())
				}}
				className={darkmode}
				icon={darkmode ? <BiSolidMoon /> : <MdSunny />}
			/>
		</div>
	)
}
