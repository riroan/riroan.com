import React from 'react'
import styles from './DateTime.module.css'
import { useSelector } from 'react-redux'

export default function DateTime(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<span className={[styles.container, styles[darkmode]].join(' ')} styles={props.style}>
			{props.children}
		</span>
	)
}
