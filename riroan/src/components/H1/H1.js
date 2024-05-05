import React from 'react'
import styles from './H1.module.css'

export default function H1(props) {
	return (
		<div style={props.style} className={styles.container}>
			{props.children}
		</div>
	)
}
