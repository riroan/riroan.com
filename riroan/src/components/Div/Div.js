import React from 'react'
import styles from './Div.module.css'
import { useSelector } from 'react-redux'

export default function Div(props) {
	const darkmode = useSelector(state => state.darkmode.darkmode)
	return (
		<div style={props.style} className={[styles.container, styles[darkmode]].join(" ")}>
			{props.children}
		</div>
	)
}
