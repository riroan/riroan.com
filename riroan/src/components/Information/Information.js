import React from 'react'
import styles from './Information.module.css'
import { useSelector } from 'react-redux'

export default function Information(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<div style={props.style} className={[styles.container, styles[darkmode]].join(' ')}>
			{props.icon} {props.children}
		</div>
	)
}
