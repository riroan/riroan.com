import React from 'react'
import styles from './UtilitySet.module.css'
import { MdSunny } from 'react-icons/md'
import { BiSolidMoon } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { darkmodeActions } from '../../app/darkmodeSlice'
import { detailActions } from '../../app/detailSlice'
import { GoUnfold, GoFold } from 'react-icons/go'
import Utility from '../Utility'

export default function UtilitySet() {
	const dispatch = useDispatch()
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const detail = useSelector(state => state.detail.detail)

	return (
		<div className={styles.container}>
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
