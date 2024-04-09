import React from 'react'
import styles from './Utility.module.css'

export default function Utility(props) {
	return (
		<div style={props.style} onClick={props.onClick} className={[styles.container, styles[props.className]].join(' ')}>
			{props.icon}
		</div>
	)
}
