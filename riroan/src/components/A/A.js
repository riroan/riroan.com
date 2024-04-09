import React from 'react'
import styles from './A.module.css'
import { useSelector } from 'react-redux'

export default function A(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<a target="#" href={props.href} style={props.style} className={[styles.container, styles[darkmode]].join(' ')}>
			{props.children}
		</a>
	)
}
