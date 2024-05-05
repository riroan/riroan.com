import React from 'react'
import styles from './P.module.css'

export default function P(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
