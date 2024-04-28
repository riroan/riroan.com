import React from 'react'
import styles from './UtilitySet.module.css'
import { MdSunny } from 'react-icons/md'
import { BiSolidMoon } from 'react-icons/bi'
import { FaLanguage } from 'react-icons/fa6'
import { GoUnfold, GoFold } from 'react-icons/go'
import { useSelector, useDispatch } from 'react-redux'
import { darkmodeActions } from '../../app/darkmodeSlice'
import { detailActions } from '../../app/detailSlice'
import { languageActions } from '../../app/languageSlice'
import { GrLanguage } from 'react-icons/gr'
import Utility from '../Utility'

export default function UtilitySet() {
	const dispatch = useDispatch()
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)
	const language = useSelector(state => state.language.language)
	const koStyle = { color: 'eee', borderColor: '1a1a1a', backgroundColor: 'red', filter: 'invert(100%)' }
	const enStyle = { color: '1a1a1a', borderColor: 'eee', backgroundColor: 'red' }

	return (
		<div className={styles.container}>
			<Utility
				icon={<GrLanguage />}
				onClick={() => {
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
