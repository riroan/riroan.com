import React from 'react'
import styles from './TechStack.module.css'
import { useSelector } from 'react-redux'

export default function TechStack(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<span styles={props.style} className={[styles.container, styles[darkmode]].join(' ')}>
			{props.children}
		</span>
	)
}
