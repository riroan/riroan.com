import React from 'react'
import styles from './Div.module.css'

export default function Div(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
