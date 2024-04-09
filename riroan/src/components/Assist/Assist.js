import React from 'react'
import styles from './Assist.module.css'
import { useSelector } from 'react-redux'

export default function Assist(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<span style={props.style} className={[styles.container, styles[darkmode]].join(' ')}>
			{props.children}
		</span>
	)
}
