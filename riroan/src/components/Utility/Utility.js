import React from 'react'
import styles from './Utility.module.css'
import { MdSunny } from 'react-icons/md'
import { BiSolidMoon } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { darkmodeActions } from '../../app/darkmodeSlice'

export default function Utility() {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	const dispatch = useDispatch()
	const toggleDarkmode = () => {
		dispatch(darkmodeActions.toggle())
	}
	return (
		<div onClick={toggleDarkmode} className={[styles.container, styles[darkmode]].join(' ')}>
			{darkmode ? <BiSolidMoon /> : <MdSunny />}
		</div>
	)
}
